angular.module('mainApp.controllerContact',[])
.controller('contactCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('contact');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}]);
