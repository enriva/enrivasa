angular.module('mainApp.controllerProducts',[])
.controller('productsCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
  $scope.data = $getDataContents;
  console.log($scope.data);
  $getLocation.cLocator('products');
  $scope.dTs = function(content) {
    return $sce.trustAsHtml(content);
  }
}])
.controller('soldCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
  $scope.data = $getDataContents;
  console.log($scope.data);
  $getLocation.cLocator('products');
  $scope.dTs = function(content) {
    return $sce.trustAsHtml(content);
  }
}])
.controller('cortCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
  $scope.data = $getDataContents;
  console.log($scope.data);
  $getLocation.cLocator('products');
  $scope.dTs = function(content) {
    return $sce.trustAsHtml(content);
  }
}])
.controller('sierCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
  $scope.data = $getDataContents;
  console.log($scope.data);
  $getLocation.cLocator('products');
  $scope.dTs = function(content) {
    return $sce.trustAsHtml(content);
  }

  $scope.closeProductDetails = function(productId) {
    var $productDetailCover = $('#productDetail' + productId);
    $productDetailCover.css('display', 'none');
  };
}])
.controller('talCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
  $scope.data = $getDataContents;
  console.log($scope.data);
  $getLocation.cLocator('products');
  $scope.dTs = function(content) {
    return $sce.trustAsHtml(content);
  }
}]);
