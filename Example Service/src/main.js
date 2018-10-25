const { getPowerDevices, getBenchmark } = require('./core');
const { continousInformation, kWhToEuro } = require('./powerAnalyze');
const { translations } = require('./translations');
const { deviceIframe } = require('./selectionTemplate');
const { benchmarkData } = require('./benchmarkData');
const { mailTemplate: mailTemplateDE } = require('./mailTemplateDE');
const { mailTemplate: mailTemplateEN } = require('./mailTemplateEN');

const mydaco = require('mydaco');

exports.main = async function (params) {
  try {
    // If not triggered by cron job.
    if (params.inter !== 'Cron') {
      const { lang = 'en' } = params.params;
      const t = translations[lang];
      const { title } = t.iFrameText;
      const templateId = 'v1';
      if (params.params.initAction) {
        return await handleInit(t, title, templateId, lang);
      }
      return await handleIframeClosed(params, t, title, lang, templateId);
    }
    return await handleCron();
  } catch (error) {
    return {};
  }
}

async function handleInit(t, title, templateId, lang) {
  const customId = '1';
  // Get all devices of the user, that are suitable for energy benchmarks.
  const devices = await getPowerDevices(lang);
  if (devices.length === 0) {
    // It doesn't make sense to start the service, if the user doesn't have suitable devices.
    const lastIFrame = true;
    return { html: t.htmlNoDevice, title, lastIFrame, customId, lang };
  }
  // Store the device for later use.
  await mydaco.interface('KeyValueStore', 'put', { key: 'devices', value: devices });
  const pugFill = { devices, ...t.iFrameText };
  const pugCode = deviceIframe;
  const lastIFrame = false;
  return {
    pugCode, pugFill, title, templateId, lastIFrame, customId, lang,
  };
}

async function handleIframeClosed(params, t, title, lang, templateId) {
  const { fields } = params.params;
  fields.lang = lang;
  const lastIFrame = true;
  const customId = '2';

  //Save fields for later use.
  await mydaco.interface('KeyValueStore', 'put', { key: 'fields', value: fields });
  // Create cron pattern 'every minute'. We don't do the calculation just in time, because that would delay the display of the iframe by a couple of seconds.
  await mydaco.interface('Cron', 'put', { cronPatterns: ['* * * * *'] });
  return { html: t.htmlSuccess, title, templateId, lastIFrame, customId, lang };
}

async function handleCron() {
  try {
    // Remove cron pattern (Otherwise this action would be called every minute till the end of time)
    await mydaco.interface('Cron', 'put', { cronPatterns: [] });
    // Retrieve alle data, that has been saved in the previous steps.
    const keyValue = await mydaco.interface('KeyValueStore', 'get', { key: 'fields' });
    const devicesDb = await mydaco.interface('KeyValueStore', 'get', { key: 'devices' });
    // Delete all data from KeyValueStore.
    await mydaco.interface('KeyValueStore', 'remove', { key: 'fields' });
    await mydaco.interface('KeyValueStore', 'remove', { key: 'devices' });

    const fields = keyValue.value;
    const { lang = 'en' } = fields;
    const t = translations[lang];
    // Retrieve data and calculate the energy benchmark.
    const benchmark = await getBenchmark(fields, devicesDb.value);

    // Prepare mail to user.
    const subject = t.mailSubject;
    let text;
    let html;
    if (benchmark.length === 0) {
      text = t.mailError;
      html = t.mailError;
    } else {
      const start = new Date(fields.start);
      const end = new Date(fields.end);
      const information = continousInformation(start, end, benchmark);

      const startString = `${start.getDate()}.${start.getMonth() + 1}.${start.getFullYear()}`;
      const endString = `${end.getDate()}.${end.getMonth() + 1}.${end.getFullYear()}`;

      const { mailRating } = t;
      let rating;
      // Compare it to existing energy benchmark data and rate the fridge accordingly.
      if (information.normConsumption < benchmarkData['0.1']) {
        rating = mailRating.veryLow;
      } else if (information.normConsumption < benchmarkData['0.4']) {
        rating = mailRating.low;
      } else if (information.normConsumption < benchmarkData['0.6']) {
        rating = mailRating.average;
      } else if (information.normConsumption < benchmarkData['0.9']) {
        rating = mailRating.high;
      } else {
        rating = mailRating.veryHigh;
      }

      benchmarkData['0.5'] = (benchmarkData['0.4'] + benchmarkData['0.6']) / 2;

      const replacements = {
        "%RATING%": rating,
        "%FROMDATE%": startString,
        "%TODATE%": endString,
        "%DAYS%": information.days,
        "%MONTHCONSUMPTION%": information.normConsumption.toFixed(2),
        "%MONTHCONSUMPTIONEURO%": information.normConsumptionEuro.toFixed(2),
        "%MINFE%": benchmarkData['0.1'].toFixed(2),
        "%MINEUROFE%": kWhToEuro(benchmarkData['0.1']).toFixed(2),
        "%MAXFE%": benchmarkData['0.9'].toFixed(2),
        "%MAXFEEURO%": kWhToEuro(benchmarkData['0.9']).toFixed(2),
        "%AVERAGEFE%": benchmarkData['0.5'].toFixed(2),
        "%AVERAGEEUROFE%": kWhToEuro(benchmarkData['0.5']).toFixed(2),
        "%TOTALCONSUMPTION%": information.totalConsumption.toFixed(2)
      };
      let filledMail = (lang === 'en') ? mailTemplateEN : mailTemplateDE;
      // Fill in placeholders in the mailTemplate.
      filledMail = filledMail.replace(/%\w+%/g, function (all) {
        return replacements[all] || all;
      });

      html = filledMail;
      text = html;
    }

    await writeEmail(subject, text, html);
    return {};
  } catch (error) {
    // Inform the user if something went wrong.
    await writeEmail(t.mailErrorSubject, t.mailError, t.mailError);
  }
}

//Write mail the the user with the energy benchmark.
function writeEmail(subject, text, html) {
  const parameters = { subject, text, html };
  return mydaco.interface('Mail', 'sendmail', parameters);
}
