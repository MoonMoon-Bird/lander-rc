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
