$(function() {
	var height = $(window).height(); //屏幕高度
	var width =  $(window).width(); //屏幕宽度
	var en_nav = [{"tab":"public "},{"tab":"financing "},{"tab":"about "},{"tab":"superiority "},{"tab":"introduce"}];
	var cn_nav = [{"tab":"token公募 "},{"tab":"token融资计划 "},{"tab":"关于我们"},{"tab":"交易所优势 "},{"tab":"代币介绍"},{"tab":"白皮书"}];
	
	//屏幕大小改变
	window.onresize = function() {
		var changeHeight = $(window).height(); //屏幕高度
		var changeWidth =  $(window).width(); //屏幕宽度
		$('.phone_nav').hide();
		if(width>=1150) {
//			$(window).scroll(function(){
//				for(var j=0;j<5;j++){
//					if($(document).scrollTop()>=$(title[j]).offset().top-90&&$(document).scrollTop()<=$(title[j]).offset().top-90+$(title[j]).height()){
//						$('.header_nav span a').eq(j).addClass('select').siblings().removeClass('select');
//					}
//				}
//			});
		}
	}
	
	//导航
	$('.header_nav span a').click(function(){
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -90+ "px"}, 500);
		return false;
	});
	
	//手机导航
	$('.phone_nav span a').click(function(){
		$('.phone_nav').slideUp(300);
		$(this).addClass('select').siblings().removeClass('select');
//		$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top -50+ "px"}, 500);
		return false;
	});
	
	$('.phone_nav .book,.phone_nav .change').click(function(){
		$('.phone_nav').slideUp(300);
	});
	
	$('.phoneMenu').click(function() {
		$('.phone_nav').stop(true,true).slideToggle(300);
	});
	
	
});