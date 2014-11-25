angular.module('mainApp',[
	'mainApp.controller',
	'mainApp.controllerAbout',
	'mainApp.controllerServices',
	'mainApp.service',
	'ui.router',
	'firebase',
	'ngSanitize'
])
.run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	return $rootScope;
}])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/main');
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'../views/tpl/main.jade'
	});
	$stateProvider.state('about',{
		url:'/nosotros',
		templateUrl:'../views/tpl/about.jade'
	});
	$stateProvider.state('services',{
		url:'/servicios',
		templateUrl:'../views/tpl/services.jade'
	});

});
