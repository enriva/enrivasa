angular.module('mainApp.controller',[])
.controller('mainC',['$scope','$getLocation',function($scope,$getLocation){
	$getLocation.cLocator('index');
}])
.controller('mainCtrl',['$scope','$firebase','$sce',function($scope,$firebase,$sce){
	var ref = new Firebase('https://enrivasa.firebaseio.com/');
	$scope.content = $firebase(ref);
	$scope.data = $scope.content.$asObject();
	$scope.deliberatelyTrustDangerousSnippet = function() {
		return $sce.trustAsHtml($scope.data.contents.index.text);
	}
	//console.log($scope.content);
	//$scope.content = $scope.data.contents.index;
}]);
