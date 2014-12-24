angular.module('mainApp.directive',[])
.directive('subMenuLauncher',function(){
	$('.menu li a').not('#products-launcher').on('click',function(){
		$('#menu-products').addClass('hidden');
		$('#menu-products').prev().removeClass('selected');
	});
	$('#products-launcher').on('click',function(){
		if($('#menu-products').hasClass('hidden')){
			$('#menu-products').removeClass('hidden');
			$('#menu-products').prev().addClass('selected');
		}else{
			$('#menu-products').addClass('hidden');
			$('#menu-products').prev().removeClass('selected');
		}
	});
});
