angular.module('mainApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/main');
	$stateProvider.state('/main',{
		url:'/main',
		templateUrl:'../views/tpl/main.jade'
	})
});
