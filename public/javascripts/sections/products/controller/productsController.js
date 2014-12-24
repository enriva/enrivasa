angular.module('mainApp.controllerProducts',[])
.controller('productsCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('services');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}])
.controller('soldCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('services');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}])
.controller('cortCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('services');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}]);
