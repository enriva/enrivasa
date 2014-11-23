angular.module('mainApp',['mainApp.controller','mainApp.service','ui.router','firebase','ngSanitize'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/main');
	$stateProvider.state('/main',{
		url:'/main',
		templateUrl:'../views/tpl/main.jade'
	})
});
