"use strict";

/* ハンバーガーメニュー開閉制御 */
$(".js-hamburger").click(function () {
  $(this).toggleClass('is_active');
  $(".js-drawer").toggleClass('is_active');
});
$(".js-drawer a").click(function () {
  $(".js-hamburger").removeClass('is_active');
  $(".js-drawer").removeClass('is_active');
});
/* ヘッダー制御 */

$(function () {
  $(window).on("scroll", function () {
    var sliderHeight = $(".main-visual").height();

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
/* トップへ戻るボタン */

jQuery(window).on('scroll', function () {
  var sliderHeight = $(".main-visual").height();

  if (sliderHeight < jQuery(this).scrollTop()) {
    jQuery('.footer__to-top').addClass('js-to-top');
  } else {
    jQuery('.footer__to-top').removeClass('js-to-top');
  }
});
$('.footer__to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 'slow');
  return false;
});
/* ブログカード */

$('.blog-card').hover(function () {
  //マウスカーソルが重なった時の処理
  $('.blog-card__category').css('color', '#333333');
});