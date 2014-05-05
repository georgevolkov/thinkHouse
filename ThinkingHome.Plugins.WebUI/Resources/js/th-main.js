﻿requirejs.config({
	baseUrl: '/',
	paths: {
		app: 'js/app',
		tpl: 'js/vendor/tpl.min',
		json2: 'js/vendor/json2.min',
		jquery: 'js/vendor/jquery.min',
		underscore: 'js/vendor/underscore.min',
		backbone: 'js/vendor/backbone.min',
		marionette: 'js/vendor/backbone.marionette.min',
		bootstrap: 'js/vendor/bootstrap.min',
		
		'menu': 'js/application/menu-controller',
		'menu-model': 'js/application/menu-model',
		'menu-view': 'js/application/menu-view'
	},
	shim: {
		bootstrap: ['jquery'],
		backbone: {
			deps: ['json2', 'jquery', 'underscore'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	}
});

require(['app', 'menu', 'bootstrap'], function (app) {
	app.start();
});