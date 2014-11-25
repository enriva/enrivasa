angular.module('mainApp.controllerAbout',[])
.controller('aboutCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('about');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}]);
