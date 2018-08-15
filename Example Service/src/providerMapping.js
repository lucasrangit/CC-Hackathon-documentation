//Only a subset of providers have devices, that are suitable for energy benchmarks.
const interestingProviders = [
    {
        provider: 'zipato',
        filterByName: 'devolo plug',
        devices: {
            "no type": {
                metricName: ['current_consumption'],
                friendlyName: {
                    en: ['develo plug @zipato'],
                    de: ['develo Stecker @zipato'],
                },
            },
        },
    },
    {
        provider: 'zipato',
        devices: {
            "actuator.onoff.plugin": {
                metricName: ['current_consumption'],
                friendlyName: {
                    en: ['zipato plug @zipato'],
                    de: ['zipato Stecker @zipato'],
                },
            },
        },
    },
    {
        provider: 'sygonix',
        devices: {
            sww6: {
                metricName: ['PORT_1 watt', 'PORT_2 watt', 'PORT_3 watt', 'PORT_4 watt', 'PORT_5 watt', 'PORT_6 watt'],
                friendlyName: {
                    en: ['Sygonix Power Strip - Port 1', 'Sygonix Power Strip - Port 2', 'Sygonix Power Strip - Port 3', 'Sygonix Power Strip - Port 4', 'Sygonix Power Strip - Port 5', 'Sygonix Power Strip - Port 6'],
                    de: ['Steckdosenleiste Portnummer 1', 'Steckdosenleiste Portnummer 2', 'Steckdosenleiste Portnummer 3', 'Steckdosenleiste Portnummer 4', 'Steckdosenleiste Portnummer 5', 'Steckdosenleiste Portnummer 6'],
                },
            },
        },
    },
    {
        provider: 'mystrom',
        devices: {
            wse: {
                metricName: ['power'],
                friendlyName: {
                    en: ['Mystrom EU Smart Plug'],
                    de: ['myStrom Funk-Steckdose'],
                },
                pointDistance: 900000,
            },
            wsw: {
                metricName: ['power'],
                friendlyName: {
                    en: ['Mystrom EU Smart Plug2'],
                    de: ['myStrom Funk-Steckdose2'],
                },
                pointDistance: 900000,
            },
            sw: {
                metricName: ['power'],
                friendlyName: {
                    en: ['Mystrom EU Smart Plug3'],
                    de: ['myStrom Funk-Steckdose3'],
                },
                pointDistance: 900000,
            },
            wrs: {
                metricName: ['power'],
                friendlyName: {
                    en: ['Mystrom EU Smart Plug4'],
                    de: ['myStrom Funk-Steckdose4'],
                },
                pointDistance: 900000,
            },
            eth: {
                metricName: ['power'],
                friendlyName: {
                    en: ['Mystrom EU Smart Plug5'],
                    de: ['myStrom Funk-Steckdose5'],
                },
                pointDistance: 900000,
            },
            ws2: {
                metricName: ['power'],
                friendlyName: {
                    en: ['Mystrom EU Smart Plug6'],
                    de: ['myStrom Funk-Steckdose6'],
                },
                pointDistance: 900000,
            },
            mst: {
                metricName: ['power'],
                friendlyName: {
                    en: ['Mystrom EU Smart Plug7'],
                    de: ['myStrom Funk-Steckdose7'],
                },
                pointDistance: 900000,
            },
        },
    },
    {
        provider: 'freshenergy',
        devices: {
            'Fresh Energy': {
                metricName: ['dailyConsumption'],
                friendlyName: {
                    en: ['Fresh Energy'],
                    de: ['Fresh Energy'],
                },
            },
        },
    },
];

module.exports = {
    interestingProviders,
};
