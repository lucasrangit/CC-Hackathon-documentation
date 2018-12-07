const translations = {
	"en": {
		title: "Fresh Compare for fridge",
		initIFrame: {
			noDeviceTitle: "We are sorry.",
			noDeviceText: "you seem to have no suitable device. Please use an electricity metering device (smart plug) from mystrom, Sygonix or Zipato to use our service!",
			selectTitle: "What do you want to do?",
			selectText: "You can choose whether you want to receive an email with an analysis or you want to configure the widget.",
			textMail: "benchmark by email",
			textWidget: "widget configuration",
			buttonLabel: "Proceed",
			errorType: "Please select what you intend to do!",
		},
		deviceSelection: {
			title: "Select a device",
			text: "Please select the device which is measuring the electricity consumption of your fridge:",
			error: "You have to select a device",
			buttonLabel: "Proceed"
		},
		widgetFinished: {
			title: "Widget installed",
			text: "Your widget is now installed and you can start to monitor your power consumption!",
			error: "There has been trouble to start your widget.",
			buttonLabel: "Close"
		},
		mailSettings: {
			title: "Benchmark settings",
			daySelectionText: "Please select the time range of the consumption data which you would like to analyze:",
			dayToStartText: 'From',
			dayToEndText: 'To',
			buttonLabel: "Proceed",
			error: "You have to select valid dates"
		},
		mailFinished: {
			title: "Benchmark started",
			text: "Your benchmark started and you will receive an email soon!",
			error: "There has been trouble to start your benchmark.",
			buttonLabel: "Close"
		},
		mail: {
			subject: 'Your Fresh Compare energy benchmark',
			errorSubject: 'Problems with your energy benchmark',
			error: 'We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?',
			rating: {
				veryLow: 'very good',
				low: 'good',
				average: 'average',
				high: 'bad',
				veryHigh: 'very bad'
			}
		},
		widget: {
			noData: "Sorry. There is no benchmark available yet.",
			error: 'We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?',
			rating: {
				veryLow: 'Very Good',
				low: 'Good',
				average: 'Average',
				high: 'Bad',
				veryHigh: 'Very Bad'
			},
			image: {
				veryLow: 'ScaleA+++.png',
				low: 'ScaleA+.png',
				average: 'ScaleA.png',
				high: 'ScaleB.png',
				veryHigh: 'ScaleD.png'
			}
		},

	},
	"de": {
		title: "Fresh Compare for fridge",
		initIFrame: {
			noDeviceTitle: "We are sorry.",
			noDeviceText: "you seem to have no suitable device. Please use an electricity metering device (smart plug) from mystrom, Sygonix or Zipato to use our service!",
			selectTitle: "What do you want to do?",
			selectText: "You can choose whether you want to receive an email with an analysis or you want to configure the widget.",
			textMail: "benchmark by email",
			textWidget: "widget configuration",
			buttonLabel: "Proceed",
			errorType: "Please select what you intend to do!",
		},
		deviceSelection: {
			title: "Select a device",
			text: "Please select the device which is measuring the electricity consumption of your fridge:",
			error: "You have to select a device",
			buttonLabel: "Proceed"
		},
		widgetFinished: {
			title: "Widget installed",
			text: "Your widget is now installed and you can start to monitor your power consumption!",
			error: "There has been trouble to start your widget.",
			buttonLabel: "Close"
		},
		mailSettings: {
			title: "Benchmark settings",
			daySelectionText: "Please select the time range of the consumption data which you would like to analyze:",
			dayToStartText: 'From',
			dayToEndText: 'To',
			buttonLabel: "Proceed",
			error: "You have to select valid dates"
		},
		mailFinished: {
			title: "Benchmark started",
			text: "Your benchmark started and you will receive an email soon!",
			error: "There has been trouble to start your benchmark.",
			buttonLabel: "Close"
		},
		mail: {
			subject: 'Your Fresh Compare energy benchmark',
			errorSubject: 'Problems with your energy benchmark',
			error: 'We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?',
			rating: {
				veryLow: 'very good',
				low: 'good',
				average: 'average',
				high: 'bad',
				veryHigh: 'very bad'
			}
		},
		widget: {
			noData: "Sorry. There is no benchmark available yet.",
			error: 'We are sorry! We ran into problems and were not able to analyze your data. Maybe there is no suitable device connected?',
			rating: {
				veryLow: 'Very Good',
				low: 'Good',
				average: 'Average',
				high: 'Bad',
				veryHigh: 'Very Bad'
			},
			image: {
				veryLow: 'ScaleA+++.png',
				low: 'ScaleA+.png',
				average: 'ScaleA.png',
				high: 'ScaleB.png',
				veryHigh: 'ScaleD.png'
			}
		},
	}
};

module.exports = {
	translations
};
