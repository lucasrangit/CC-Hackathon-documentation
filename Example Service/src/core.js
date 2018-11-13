const { interestingProviders } = require('./providerMapping');
const mydaco = require('mydaco');

const interestingProviderNames = interestingProviders.map(p => p.provider);
const isInterestingProvider = p => interestingProviderNames.indexOf(p.provider) > -1;

async function getPowerDevices(lang) {
    //Get all provider of the user. No Provider automatically means no devices.
    const provider = await getProvider();
    if (provider.length === 0)
        return [];
    const devices = await getDevices(provider);
    // Only a subset of devices is suitable for energy benchmarks.
    const selectDevices = getSelectDevices(devices, lang);
    return selectDevices;
}

function getProvider() {
    return mydaco.interface('IotCore', 'provider', {});
}

function getDevices(provider) {
    // Only a subset of providers has devices, that are suitable for energy benchmarks.
    const interesting = provider.filter(isInterestingProvider).map(p => p.provider);
    return mydaco.interface('IotCore', 'devices', { providers: interesting });
}

function getSelectDevices(userDevices, lang) {
    //Get Devices and metrics in a unified way.
    const devices = userDevices
        .map((device) => {
            const mapping = interestingProviders
                .find(p => ((p.provider === device.provider && !p.filterByName) || p.filterByName === device.name))
            let metrics;
            if (mapping) {
                metrics = mapping.devices[device.resourceType];
            }
            let interesting = !!metrics;
            return {
                provider: device.provider,
                providerId: device.providerId,
                resourceType: device.resourceType,
                name: device.name,
                interesting,
                metrics,
            };
        })
        .filter(d => d.interesting)
        .map((d) => {
            if (d.metrics.metricName.length > 1) {
                return d.metrics.metricName.map((m, key) => ({
                    name: `${d.name} - ${m}`,
                    metric: m,
                    friendlyName: d.metrics.friendlyName[lang][key],
                    provider: d.provider,
                    providerId: d.providerId,
                    providerMetric: `${d.providerId}.${d.metrics.metricName}`,
                    pointDistance: d.metrics.pointDistance
                }));
            }
            return {
                name: d.name,
                metric: d.metrics.metricName,
                friendlyName: d.metrics.friendlyName[lang],
                provider: d.provider,
                providerId: d.providerId,
                providerMetric: `${d.providerId}.${d.metrics.metricName}`,
                pointDistance: d.metrics.pointDistance
            };
        })
        // Flatmap possible deep arrays.
        .reduce((acc, selection) => acc.concat(selection), []);
    return devices;
}

async function getBenchmark(fields, devices) {
    // get properties for the devices:
    const usedDevices = devices.find(d => d.providerMetric === fields.device)
    console.log(usedDevices);
    console.log(fields)
    const grouping = 'minute'; // day is not working
    const aggregate = 'mean';
    const resourceId = usedDevices.providerId;
    const metric = usedDevices.metric;
    const start = (new Date(fields.start)).getTime();
    // end date needs to have 1 day added, to bascially calculate till 23:59
    const end = (new Date(fields.end)).getTime() + 86400000 - 1000;
    const data = await mydaco.interface('IotCore', 'data', {
        grouping, aggregate, resourceId, metric, start, end,
    });
    const benchmark = data.series;
    return benchmark;
}


module.exports = {
    getPowerDevices,
    getBenchmark,
};
