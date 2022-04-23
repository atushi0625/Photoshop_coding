'use strict';


// ハンバーガーメニュー

$(function () {
     $('#hamburger').on('click', function () {
          $('#header-menu').toggleClass('open');
     });
     $('#close').on('click', function () {
          $('#header-menu').removeClass('open');
     });
});

// ファーストビューアニメーション
const swiper = new Swiper('.swiper', {
     direction: 'horizontal',
     loop: true,
     speed: 1500,
     effect: 'fade',
     autoplay: {
          delay: 4000,
     }


});

// ファーストビューの下までスクロールすると、ヘッダーが追従&色が変わる
$(function () {
     var $header = $("header"),
          animationClass = "is-animation";
     var $line = $(".header__menu-list"),
          line = "line";
     var $menuB = $(".hamburger"),
          menuB = "menu-b";

     $(window).scroll(function () {
          var value = $(this).scrollTop();
          var main = $("main").innerHeight() + 80;
          if (value > main) {
               $header.addClass(animationClass);
               $line.addClass(line);
               $(".header__logo").find("img").attr("src", "img/logo-b.svg");
               $menuB.addClass(menuB);

          } else {
               $header.removeClass(animationClass);
               $line.removeClass(line);
               $(".header__logo").find("img").attr("src", "img/logo-w-2-sp.svg");
               $menuB.removeClass(menuB);
          }
     });
});

// ヘッダーテキストカラーが白から黒に変化
$(function () {
     var $BlackColor = $(".header__menu-list a"),
          BlackColor = "black-color";
     $(window).scroll(function () {
          var value = $(this).scrollTop();
          var main = $("main").innerHeight();
          if (value > main && window.matchMedia('(min-width:768px)').matches) {
               $BlackColor.addClass(BlackColor);

          } else {
               $BlackColor.removeClass(BlackColor);

          }

     });

});

// ローディングアニメーション
$(function () {
     $(window).on('load', function () {
          $(".loading").delay(1500).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
          $(".loading__logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒（1200ms）待機してからフェードアウト

     });
});

// スムーススクロール
$(function () {
     // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない）
     $('a[href^="#"]').click(function () {
          // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
          var adjust = -50;
          // スクロールの速度（ミリ秒）
          var speed = 400;
          // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
          var href = $(this).attr("href");
          // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
          var target = $(href == "#" || href == "" ? 'html' : href);
          // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
          var position = target.offset().top + adjust;
          // スムーススクロール linear（等速） or swing（変速）
          $('body,html').animate({
               scrollTop: position
          }, speed, 'swing');
          return false;
     });
});


// 現在のセクションに色がつく
$(function () {
     $(window).on("load scroll resize", function () {

          var st = $(window).scrollTop();
          var wh = $(window).height();

          $('.position-now').each(function (i) {
               var tg = $(this).offset().top;
               var id = $(this).attr('id');

               if (st > tg - wh + (wh / 2) && window.matchMedia('(min-width:768px)').matches) {
                    $(".header__menu-list a").removeClass("link-current");
                    var link = $(".header__menu-list a[href *= " + id + "]");
                    $(link).addClass("link-current");
               }
          });

     });

});