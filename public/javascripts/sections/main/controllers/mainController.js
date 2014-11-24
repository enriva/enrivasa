angular.module('mainApp.controller',[])
.controller('mainC',['$scope','$getLocation',function($scope,$getLocation){
}])
.controller('mainCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	$getLocation.cLocator('index');
	$scope.dTs = function() {
		return $sce.trustAsHtml($scope.data.index.text);
	}
}]);
