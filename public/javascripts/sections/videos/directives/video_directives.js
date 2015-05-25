angular.module('mainApp.directiveVideos',[])
.directive('showVideo',['$document',function($document){
	return {
		restrict:'A',
		link:function(scope,element,attr){
			element.on('click',function(element){
				var id = attr.id;
				$('.cover-v').show();
				$('#video'+id).addClass('show-video');
				$('#cv'+id).addClass('show-video');
				$('.close-video').show().attr('id',''+id);
				$('.upside-header').hide();
			});
		}
	}
}])
.directive('hideVideo',['$document',function($document){
	return {
		restrict: 'A',
		link: function(scope,element,attr){
			element.on('click',function(element){
				$('.cover-v').hide();
				$('.video').removeClass('show-video');
				$('.video_comment_cover').removeClass('show-video');
				$('.close-video').hide().removeAttr('id');
				$('.upside-header').show();
			});
		}
	}
}]);
