/* ハンバーガーメニュー開閉制御 */
$(".js-hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('is_active');//ボタン自身に is_activeクラスを付与し
	$(".js-drawer").toggleClass('is_active');//メニューにis_activeクラスを付与

});

$(".js-drawer a").click(function () {//メニューのリンクがクリックされたら
	$(".js-hamburger").removeClass('is_active');//ボタンのis_activeクラスを除去し
	$(".js-drawer").removeClass('is_active');//メニューのis_activeクラスも除去

});

/* ヘッダー制御 */
$(function () {
	$(window).on("scroll", function () {
		const sliderHeight = $(".main-visual").height();
		if (sliderHeight - 30 < $(this).scrollTop()) {
			$(".header").addClass("change_color");
		} else {
			$(".header").removeClass("change_color");
		}
	});
});

/* Swiper */
var mySwiper = new Swiper('.swiper-container', {

	// スライドの間隔ー単位はpx
	spaceBetween: 10,
	// 表示されるスライドの枚数
	slidesPerView: 1,
	// スライドの高さに合わせてSwiperの高さを変える
	autoHeight: true,
	// ループする
	loop: true,

	/*自動で再生する*/
	autoplay: {
		// スライドが動く間隔。(これなら3秒)
		delay: 3000,
		// trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
		stopOnLastSlide: false,
		// trueなら触った後停止falseなら再生され続ける
		disableOnInteraction: false,
		// trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
		reverseDirection: false
	},

	/*スライドボタン*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	/*ページネーション*/
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

$('.blog-card').hover(
	function () {

		//マウスカーソルが重なった時の処理
		$('.blog-card__category').css('color', '#333333');
	}
);

$(function () {
	$(".blog-card").on("hover", function () {
		$(this).toggleClass('js-hover');
	});
});
