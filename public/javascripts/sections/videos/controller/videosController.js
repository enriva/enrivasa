angular.module('mainApp.controllerVideos',[])
.controller('videosCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('videos');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	};
// RETURN URL
	$scope.getIframeSrc = function(src){
		return src;
	};
}]);
