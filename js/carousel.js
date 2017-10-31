

(function($){
	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i) ? true : false;
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i) ? true : false;
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i) ? true : false;
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
		}
	};


	if( isMobile.any() )
	{
		var $lash=100;
	}else{
		var $lash=15;
	}

	var swiper2 = new Swiper('#demo2', {
		loop : true,
		nextButton:'.c-x',
		prevButton:'.c-s',
		pagination: '.swiper-pagination',
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		autoplay: 6000,
		coverflow: {
			rotate: 0,// 旋转的角度
			stretch: $lash,// 拉伸   图片间左右的间距和密集度
			depth: 180,// 深度   切换图片间上下的间距和密集度
			modifier: 4,// 修正值 该值越大前面的效果越明显
			slideShadows : false// 页面阴影效果
		}
	});


})(jQuery);
