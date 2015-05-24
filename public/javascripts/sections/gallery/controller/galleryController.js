angular.module('mainApp.controllerGallery',[])
.controller('galleryCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('gallery');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}]);
