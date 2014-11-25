angular.module('mainApp.controllerServices',[])
.controller('servicesCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('services');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}]);
