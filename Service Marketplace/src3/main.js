
const { template } = require('./Template.js');

exports.main = function main(params) {
  if (params.params.initAction) {
    return handleInit(params);
  }
  return handleIframeClose(params);
}

async function handleInit(params) {
  const { lang = 'en' } = params.params;
  let title;
  let text;
  let devices;
  if (lang === 'de') {
    title = 'Mein erster Service (v3)';
    text = 'Hallo Welt! Wähle dein Lieblingsgerät:';
    devices = ['Geschirrspüler', 'Kühlschrank', 'Waschmaschine'];
  } else {
    title = 'My first Service (v3)';
    text = 'Hello World! Choose your favorite device:';
    devices = ['Dishwasher', 'Fridge', 'Washingmachine'];
  }
  const pugFill = { text, devices };
  const pugCode = template;
  const customId = '1';
  const lastIFrame = false;
  return {
    pugCode, pugFill, title, lang, customId, lastIFrame
  };
}

async function handleIframeClose(params) {
  const { fields, lang } = params.params;
  const { device } = fields;
  if (lang === 'de') {
    title = 'Dein Lieblingsgerät';
    html = `Dein Lieblingsgerät ist: ${device}`;
  } else {
    title = 'Your favorite device';
    html = `Your favorite device is: ${device}`;
  }
  return { html, title, lang };
}
