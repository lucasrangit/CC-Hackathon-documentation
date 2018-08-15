const translations = {
  en: {
    iFrameText: {
      title: "Fresh Energy Fridge Benchmark",
      selectDeviceText: "Please select your fridge measurement device.",
      dayToStartText: 'Day to start analysis',
      dayToEndText: 'To',
    },
    htmlNoDevice: '<p>We are sorry, you seem to have no suitable device.</p>',
    htmlError: '<p>We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?</p>',
    htmlSuccess: '<p>Thank you! You will receive your benchmark by email soon!</p>',
    mailSubject: 'Your energy benchmark arrived',
    mailErrorSubject: 'Problems with your energy benchmark',
    mailError: 'We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?',
    mailRating: {
      veryLow: 'very low',
      low: 'low',
      average: 'average',
      high: 'high',
      veryHigh: 'very high'
    }
  },
  de: {
    iFrameText: {
      title: "Fresh Energy Fridge Benchmark",
      selectDeviceText: "Please select your fridge measurement device.",
      dayToStartText: 'Day to start analysis',
      dayToEndText: 'To',
    },
    htmlNoDevice: '<p>We are sorry, you seem to have no suitable device.</p>',
    htmlError: '<p>We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?</p>',
    htmlSuccess: '<p>Thank you! You will receive your benchmark by email soon!</p>',
    mailSubject: 'Your energy benchmark arrived',
    mailErrorSubject: 'Problems with your energy benchmark',
    mailError: 'We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?',
    mailRating: {
      veryLow: 'sehr gering',
      low: 'gering',
      average: 'mittel',
      high: 'hoch',
      veryHigh: 'sehr hoch'
    }

  },
};

module.exports = {
  translations
};
