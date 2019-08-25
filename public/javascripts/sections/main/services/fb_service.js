angular.module('mainApp.service',[])
.factory('$getDataContents',function($firebase){
	var ref = new Firebase('https://enriva-venezuela.firebaseio.com/contents');
	var data = $firebase(ref);
	data = data.$asObject();
	return data;
})
.factory('$getLocation',function($getDataContents){
	var copyData = $getDataContents;
	return {
		locationModel:{},
		data:copyData,
		cLocator:function(location){
			//Get the data for manipulation in local
			this.data.$loaded(function(d){
				$('#page-tittle')[0].textContent = d[location].title;
			});
		}
	};
});
