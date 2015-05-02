'use strict';


module.exports = {
	app: {
		title: 'Wantie',
		description: 'Services application for Emerge Americas 2015 Hackathon',
		keywords: 'emerge 2015 hackathon',
		googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions'
};
