$(function(){/* ページ内リンクをスムーズに  */
  $('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
	
	
let $pagetop = $('.flbtn');

  $(window).on( 'scroll', function () {
    //スクロール位置を取得
    if ( $(this).scrollTop() < 1500 ) {
      $pagetop.css('opacity','0');
		
    } else {
      $pagetop.css('opacity','1');
    }
  });



// 現在の月を取得する
let currentMonth = new Date().getMonth() + 1;

// 月ごとの画像のパスを配列に格納する
let imagePaths = [
  'images/button_01.png',
  'images/button_02.png',
  'image/button.png',
  'images/button_04.png',
  'images/button_05.png',
  'images/button_06.png',
  'images/button_07.png',
  'images/button_08.png',
  'images/button_09.png',
  'images/button_10.png',
  'images/button_11.png',
  'images/button_12.png'
];

// 別の月ごとの画像のパスを配列に格納する
let imagePaths2 = [
  'images/benefit_title1.png',
  'images/benefit_title2.png',
  'images/benefit_title3.png',
  'images/benefit_title4.png',
  'images/benefit_title5.png',
  'images/benefit_title6.png',
  'images/benefit_title7.png',
  'images/benefit_title8.png',
  'images/benefit_title9.png',
  'images/benefit_title10.png',
  'images/benefit_title11.png',
  'images/benefit_title12.png'
  // 残りの画像パスを追加
];

// すべての画像要素を取得する
let images = document.querySelectorAll('.monthly-image');
let images2 = document.querySelector('.monthly-image-2');

// 最初の画像セットに対して処理を行う
images.forEach(function(img, index) {
  img.src = imagePaths[currentMonth - 1];
  setInterval(function() {
    let now = new Date();
    if (now.getDate() === 1) {
      currentMonth = now.getMonth() + 1;
      img.src = imagePaths[currentMonth - 1];
    }
  }, 86400000);
});

// 2つ目の画像に対して処理を行う
images2.src = imagePaths2[currentMonth - 1];
setInterval(function() {
  let now = new Date();
  if (now.getDate() === 1) {
    currentMonth = now.getMonth() + 1;
    images2.src = imagePaths2[currentMonth - 1];
  }
}, 86400000);
});

////////////////////////////////////////
//スライダー
////////////////////////////////////////
$(function(){
	var setElm = $('.loopSlider'),
	slideSpeed = 4000;

	setElm.each(function(){
		var self = $(this),
		selfWidth = self.innerWidth(),
		findUl = self.find('ul'),
		findLi = findUl.find('li'),
		listWidth = findLi.outerWidth(),
		listCount = findLi.length,
		loopWidth = listWidth * listCount;

		findUl.wrapAll('<div class="loopSliderWrap" />');
		var selfWrap = self.find('.loopSliderWrap');

		if(loopWidth > selfWidth){
			findUl.css({width:loopWidth}).clone().appendTo(selfWrap);

			selfWrap.css({width:loopWidth*2});

			function loopMove(){
				selfWrap.animate({left:'-' + (loopWidth) + 'px'},slideSpeed*listCount,'linear',function(){
					selfWrap.css({left:'0'});
					loopMove();
				});
			};
			loopMove();
		}
	});
});
