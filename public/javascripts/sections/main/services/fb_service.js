angular.module('mainApp.service',[])
.factory('$getData',function($firebase){
	var ref = new Firebase('https://enrivasa.firebaseio.com/contents');
	var data = $firebase(ref);
	data = data.$asObject();
	//console.log(data);
	return data;
})
.factory('$getLocation',function($getData){
	var copyData = $getData;
	return {
		locationModel:{},
		data:copyData,
		cLocator:function(location){
			//Get the data for manipulation in local
			this.data.$loaded(function(d){
				$('#page-tittle')[0].textContent = d[location].title;
			});

			//this.locationModel = this.data.contents[location];
			//console.log(this);
		}
	};
});
