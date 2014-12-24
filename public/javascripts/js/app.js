angular.module('mainApp',[
	'mainApp.controller',
	'mainApp.directive',
	'mainApp.controllerAbout',
	'mainApp.controllerServices',
	'mainApp.controllerProducts',
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
	$stateProvider.state('products',{
		abstract:true,
		url:'/products',
		template:'<ui-view />'
	}).state('products.soldOrb',{
		url:'/soldadura_orbital',
		templateUrl:'../views/tpl/soldOrb.jade'
	}).state('products.cortOrb',{
		url:'/corte_orbital',
		templateUrl:'../views/tpl/cortOrb.jade'
	});
});
