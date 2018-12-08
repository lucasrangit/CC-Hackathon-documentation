const mydaco = require('mydaco');

exports.main = async function main(params) {
    try {
        if (params.inter === 'ServiceMarketplace') {
            if (params.func === 'start') {
                return await start(params.params);
            }
            if (params.func === 'interact') {
                return await interact(params.params);
            }
        }
        if (params.inter === 'IotCore') {
            buttonEvent(params.params);
        }
        if (params.inter === 'Widget') {
            return widgetMain(params);
        }
    } catch (e) {
        console.log(e);
    }
}

async function start(params) {
    const { lang = 'en' } = params;
    // retrieve all devices in account
    const devices = await getLampsAndButtons();
    title = 'My second device service with featured devices';
    text = 'You have these lamps:';

    let html = 'Lamps<br>';
    for (const lamp of devices.lamps) {
        html += `<input type="radio" name="lampId" value="${lamp.id}" required> ${lamp.name}<br>`;
    }
    html += 'Buttons<br>';
    for (const button of devices.buttons) {
        html += `<input type="radio" name="buttonId" value="${button.id}" required> ${button.name}<br>`;
    }
    html += `<input type="button" onclick="sendInputs()" value="OK" />`;

    // list all events
    const events = await mydaco.interface('IotCore', 'listEvents', {});
    console.log(events);

    return { title, html };
}

async function buttonEvent(params) {
    // toggle the occupied state on press
    const storageOccupied = await mydaco.interface('KeyValueStore', 'get', { key: 'occupied' });
    await mydaco.interface('KeyValueStore', 'put', { key: 'occupied', value: !storageOccupied.value });

    const value = Math.round(Math.random() * 256 * 256 * 256);
    const hexString = value.toString(16);
    const storage = await mydaco.interface('KeyValueStore', 'get', { key: 'lampId' });
    if (storage.key) {
        const deviceId = storage.value;
        const data = await mydaco.interface('IotCore', 'actuate', { deviceId, property: 'color', value: hexString });
    }

    return {};
}

async function interact(params) {
    const { buttonId, lampId } = params.inputs;
    if (!buttonId || !lampId) {
        return { html: 'Please select a proper device.' }
    }
    const message = await deleteOldTasks();

    const data = await mydaco.interface('IotCore', 'createEvent', { event: 'click', deviceId: buttonId });
    
    const storageLamp = await mydaco.interface('KeyValueStore', 'put', { key: 'lampId', value: lampId });

    // initialize state
    const storageOccupied = await mydaco.interface('KeyValueStore', 'put', { key: 'occupied', value: false });
    
    // debug (set mocked data)
    const storageOccupied2 = await mydaco.interface('KeyValueStore', 'get', { key: 'occupied' });
    console.log(storageOccupied2.value);

    return { html: `The service is configured. Deleted ${message.length} old events.` };
}

//get all devices in the user's account
async function getLampsAndButtons() {
    const devices = await mydaco.interface('IotCore', 'featuredDevices', { type: [] });
    const lamps = devices.filter(device => device.type === 'LAMP');
    const buttons = devices.filter(device => device.type === 'BUTTON');
    return { lamps, buttons };
}

async function deleteOldTasks() {
    const events = await mydaco.interface('IotCore', 'listEvents', {});
    for (const event of events) {
        await mydaco.interface('IotCore', 'deleteEvent', { task: event.task });
    }
    return events;
}

async function widgetMain(params) {
    let html, subTitle;

    const storageOccupied = await mydaco.interface('KeyValueStore', 'get', { key: 'occupied' });
    // debug (set mocked data)
    console.log(storageOccupied.value);

    if (params.func === 'start') {
        subTitle = 'start';
        html = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
        if (storageOccupied.value)
            html += '<i class="material-icons">home</i>';
        else
            html += '<i class="material-icons">beach_access</i>';
    }
    if (params.func === 'interact') {
        subTitle = 'interact';
        html = `TODO`;
    }

    return { html, subTitle };
}