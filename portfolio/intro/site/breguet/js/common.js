//Modal control
$(document).ready(function() {  
  var uatrident = navigator.userAgent.match(/Trident\/7.0/); 
  var uanet = navigator.userAgent.match(/.NET4.0E/);
  var IE11 = uatrident && uanet;
  var IEold = ( navigator.userAgent.match(/mise/i) != null );

  if(IE11 || IEold){
      $(".modal.ie").attr('style', 'display:block');
      $(".visual .loopBG").attr('style', 'top:0;');
  }

  $(".videoBox .view_video").click(function(){
      $(".modal.youtube").fadeIn(500);
      return false
  });

  $(".modal .modal_inner .close").click(function(){
      $(".modal").fadeOut(500);
  });
});

//-----------------------------모바일메뉴
$(document).ready(function(){
  // 모바일메뉴 open/close
  $(".mMenuBt").click(function(){
      $("nav").addClass("open");
      // nav에 open클래스 추가/삭제
  });
  $(".mCloseBt").click(function(){
      $("nav").removeClass("open");
      // nav에 open클래스 추가/삭제
  });

  if($(window).width() < 1280){
      // 모바일용 아코디언 메뉴
    $(".mSnb").hide();
    // .mSnb를 숨기고 시작
    $(".gnbMenu > .title").click(function(){
        $(this).next().slideToggle(300);
        //this 다음 요소를 슬라이드다운
        $(".gnbMenu > .title").not(this).next().slideUp(300);
        return false;
        // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
        // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
    });    
  }
});

//버튼 마우스 오버 효과
$(function() {  
  $('.btn_discover')
    .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });  
    $('.find_watch .find_inner')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
});

//상단 nav 컨트롤
$(function() {
  $(".nav .depth2_list")
  .mouseenter(function() {
    $(this).addClass('on').parent().addClass('on');
  })
  .mouseleave(function() {
    $(this).removeClass('on').parent().removeClass('on');
  });
});

//콜렉션 탭
$(document).ready(function(){
  $(".collTabs ul li").click(function(){
    $(this).addClass('on').siblings().removeClass('on'); //선택한 것에 addclass on, 그 외 on제거
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
    AOS.refreshHard();
    return false
  }); //선택한 것의 속성 id를 추출해서 클래스를 on, 그외엔 on 제거
});//ready func close;

//비주얼 탭
$(document).ready(function(){
  $(".bottom_wrap .bannerTabs ul li").click(function(){
    $(this).addClass('on').siblings().removeClass('on'); //선택한 것에 addclass on, 그 외 on제거
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
    AOS.refreshHard();
    return false
  }); //선택한 것의 속성 id를 추출해서 클래스를 on, 그외엔 on 제거
});//ready func close;

// 헤더변형 및 사이드 네비 이동
$(document).ready(function(){
  var header = $('header'); //헤더를 변수에 넣기
  var page1 = $('.fullpage'); //색상이 변할 부분
  var page2 = $('.page-start'); //색상이 변할 부분
  var page3 = $('.new-Model'); //색상이 변할 부분
  var page4 = $('.collection'); //색상이 변할 부분
  var page5 = $('.news'); //색상이 변할 부분
  // var page6 = $('.pointOfsale'); //색상이 변할 부분
  var page1OffsetTop = page1.offset().top; //색상 변할 부분의 top값 구하기  
  var page2OffsetTop = page2.offset().top; //색상 변할 부분의 top값 구하기 
  var page3OffsetTop = page3.offset().top; //색상 변할 부분의 top값 구하기 
  var page4OffsetTop = page4.offset().top; //색상 변할 부분의 top값 구하기 
  var page5OffsetTop = page5.offset().top; //색상 변할 부분의 top값 구하기 
  // var page6OffsetTop = page6.offset().top; //색상 변할 부분의 top값 구하기 

  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    header.scrollTop = header.offset().top;
    page1OffsetTop = page1.offset().top;
    page2OffsetTop = page2.offset().top;
    page3OffsetTop = page3.offset().top;
    page4OffsetTop = page4.offset().top;
    page5OffsetTop = page5.offset().top;
    // page6OffsetTop = page6.offset().top;
  });

  $(window).on('scroll', function(){
    if($(window).scrollTop() >= page2OffsetTop) { // 스크롤이 page보다 밑에 내려가면
      header.addClass('down'); //클래스 추가
    } else { // 스크롤 올릴 때
      header.removeClass('down'); //클래스 제거
    } if ($(window).scrollTop() >= page5OffsetTop + -300) { // 스크롤이 page보다 밑에 내려가면
      header.addClass('down2'); //클래스 추가
      header.removeClass('down'); //클래스 제거
    } else { // 스크롤 올릴 때
      header.removeClass('down2'); //클래스 제거
    } if($(window).scrollTop() >= page2OffsetTop + -500) { // 스크롤이 page보다 밑에 내려가면
      $(".side").addClass("down2");
    } else { // 스크롤 올릴 때
      $(".side").removeClass("down2");
    }
  });

  //사이드 네비 클릭 컨트롤
  $(".goTop").click(function(){
      $("html, body").animate({
          scrollTop : 0
      }, 1200);
      $(this).addClass('on').siblings().removeClass('on');
      return false
  });

  $(".goCon1").click(function(){
      $("html, body").animate({
          scrollTop : page2OffsetTop
      }, 1000);
      $(this).addClass('on').siblings().removeClass('on');
      return false
  });

  $(".goCon2").click(function(){
      $("html, body").animate({
          scrollTop : page3OffsetTop
      }, 1000);
      $(this).addClass('on').siblings().removeClass('on');
      return false
  });
  
  $(".goCon3").click(function(){
      $("html, body").animate({
          scrollTop : page4OffsetTop
      }, 1000);
      $(this).addClass('on').siblings().removeClass('on');
      return false
  });
  
  $(".goCon4").click(function(){
      $("html, body").animate({
          scrollTop : page5OffsetTop
      }, 1000);
      $(this).addClass('on').siblings().removeClass('on');
      return false
  });
  
  // $(".goCon5").click(function(){
  //     $("html, body").animate({
  //         scrollTop : page6OffsetTop
  //     }, 1000);
  //     $(this).addClass('on').siblings().removeClass('on');
  //     return false
  // });

  //사이드 네비 스크롤 컨트롤
  $(window).on('scroll', function(){
    if($(window).scrollTop() >= page1OffsetTop) { // 스크롤이 page보다 밑에 내려가면
      $(".goTop").addClass('on').siblings().removeClass('on'); //클래스 추가
    } else { // 스크롤 올릴 때
      $(".goTop").removeClass('on'); //클래스 제거
    } if($(window).scrollTop() >= page2OffsetTop + -150) { // 스크롤이 page보다 밑에 내려가면
      $(".goCon1").addClass('on').siblings().removeClass('on'); //클래스 추가
    } else { // 스크롤 올릴 때
      $(".goCon1").removeClass('on'); //클래스 제거
    } if($(window).scrollTop() >= page3OffsetTop + -300) { // 스크롤이 page보다 밑에 내려가면
      $(".goCon2").addClass('on').siblings().removeClass('on'); //클래스 추가
    } else { // 스크롤 올릴 때
      $(".goCon2").removeClass('on'); //클래스 제거
    } if($(window).scrollTop() >= page4OffsetTop + -300) { // 스크롤이 page보다 밑에 내려가면 // 영역감도는 if($(window).scrollTop() >= page4OffsetTop + -300) //-300 정도에 왔을때 다음섹션 이름 
      $(".goCon3").addClass('on').siblings().removeClass('on'); //클래스 추가
    } else { // 스크롤 올릴 때
      $(".goCon3").removeClass('on'); //클래스 제거
    } if($(window).scrollTop() >= page5OffsetTop + -350) { // 스크롤이 page보다 밑에 내려가면 // 영역감도는 if($(window).scrollTop() >= page4OffsetTop + -300) //-300 정도에 왔을때 다음섹션 이름 
      $(".goCon4").addClass('on').siblings().removeClass('on'); //클래스 추가
    } else { // 스크롤 올릴 때
      $(".goCon4").removeClass('on'); //클래스 제거
    } if($(window).scrollTop() >= page5OffsetTop + -550) { // 스크롤이 page보다 밑에 내려가면 // 영역감도는 if($(window).scrollTop() >= page4OffsetTop + -300) //-300 정도에 왔을때 다음섹션 이름 
      $("section.news").addClass('dark');
      $(".side").removeClass("down2");
    } else { // 스크롤 올릴 때
      $("section").removeClass('dark');
    }
    // if($(window).scrollTop() >= page6OffsetTop + -250) { // 스크롤이 page보다 밑에 내려가면 // 영역감도는 if($(window).scrollTop() >= page4OffsetTop + -300) //-300 정도에 왔을때 다음섹션 이름 
    //   $(".goCon5").addClass('on').siblings().removeClass('on'); //클래스 추가
    //   $(".side").addClass("down2");
    //   $("section").removeClass('dark');
    // } else { // 스크롤 올릴 때
    //   $(".goCon5").removeClass('on'); //클래스 제거
    // }
  });
});

// 비주얼 컨트롤
$(document).ready(function(){
	//페이드배너를 감싸고 있는 오브젝트의 이름, 이 오브젝트의 넓이가 페이드배너의 넓이가 됨.
	var obj_wrap=$(".fullpage");
	//페이드배너 전체를 묶어주는 요소
	var obj_name = $(".visual");
	//보여질 실제 페이드배너를 감싸고 있는 영역
	var obj_child = $(".visual");
	var obj_child_acitve = "on";
	var obj_child_animate = "ani";

	//페이드배너 드래그 이동, 사용여부 (true, false)
	var touch_draging = false;//스마트폰 터치 인식

	//페이드배너 컨트롤버튼
	var ctrl_btn = true;//사용여부 (true, false)
	var ctrl_next = $(".banner_control .next");
	var ctrl_prev = $(".banner_control .prev");

	//현재페이드배너 번호 / 전체 페이드배너번호
	var numbering = false;//사용여부 (true, false)
	var curr_num = $(".slideBanner .curr_num");
	var total_num = $(".slideBanner .total_num");

	//페이드배너 리스트
	var paging = true;//사용여부 (true, false)
	var paging_obj = $(".bannerTabs ul li");
	var paging_curr_class = "on";//현재 선택된 페이드배너를 표시할 class명
	var paging_index;

	//자동플레이 여부(true, false)
	var auto_play = false;
	var auto_time = 5000;
	var refreshInvervalId;
	var auto_status;

	//이 아래 변수는 수정 금지
	var obj_drag = false;
	var obj_index = 0;
	var next_index = obj_index+1;
	//페이드배너의 갯수 계산
	var obj_length = obj_child.length;
	//페이드배너의 넓이 계산
	var obj_width = obj_wrap.width();
	var startX = null;
	var prevX = null;
	var currX = null;
	var moveX = null;
	var afterX = null;
	var e = null;
	
	
	if(touch_draging == true){
		//모바일에서 터치를 인식
		obj_name.on("touchstart", function(a){
			obj_drag = true;
			e = a.originalEvent;
			currX = e.touches[0].pageX
			startX = e.touches[0].pageX;
			obj_name.on("touchmove", function(b){
				if(obj_drag ==  true){
					e = b.originalEvent;
					prevX = currX;
					currX = e.touches[0].pageX;
					moveX = prevX - currX;
					//drag_move(moveX);
				}
			});
			
		});
		$(document).on("touchend", function(){
			if((obj_drag == true) && (Math.abs(startX) != (Math.abs(currX)))){
				drag_end();
			}
			obj_drag = false;
			obj_name.off("touchmove");
		});
	}

	///drag 혹은 touch가 종료되었을때 실행하는 함수
	function drag_end(){
		//console.log(moveX);
		if(moveX > 0){
			next_index = obj_index+1;
		}else{
			next_index = obj_index-1;
		}

		if(next_index > obj_length-1){
			next_index = 0;
		}else if(next_index<0){
			next_index = obj_length-1;
		}
		popup_change(next_index);
    time_reset();
    AOS.init();
	}
	
	function popup_change(next_index){
		//console.log(obj_index+", "+next_index);
		if(obj_index != next_index){
			obj_child.eq(next_index).addClass(obj_child_acitve);
			obj_child.eq(obj_index).removeClass(function(){
				obj_child.eq(next_index).addClass(obj_child_acitve);
				obj_child.eq(obj_index).removeClass(obj_child_acitve);
				obj_child.eq(next_index).addClass(obj_child_animate);
				obj_child.eq(obj_index).removeClass(obj_child_animate);
				obj_index = next_index;
        index_change(obj_index);
        AOS.init();
			});
		}
		
	}//popup_change

	//index 변경 시 변경해야 할 것들 (paging, numbering)
	function index_change(index){
		if(numbering == true){
			curr_num.html(index+1);
		}
		if(paging == true){
			paging_obj.removeClass(paging_curr_class);
			paging_obj.eq(index).addClass(paging_curr_class);
		}
    AOS.init();
	}

	function auto_next(){
		if(obj_index >= obj_length -1){
			next_index = 0;
		}else{
			next_index = obj_index+1;
		}
		popup_change(next_index);
	}

	function time_reset(){
		if(auto_status == "play"){
			clearInterval(refreshInvervalId);
			refreshInvervalId = setInterval(auto_next, auto_time);
		}
	}

	if(ctrl_btn == true){
		ctrl_prev.on("click", function(){
			if(obj_index < 1){
				next_index = obj_length-1;
			}else{
				next_index = obj_index-1;
			}
			popup_change(next_index);
      time_reset();
      AOS.init();
		});
		ctrl_next.on("click", function(){
			auto_next();
      time_reset();
      AOS.init();
		});
		ctrl_stop.on("click", function(){
			auto_status = "stop";
			clearInterval(refreshInvervalId);
		});
		ctrl_play.on("click", function(){
			auto_status = "play";
			refreshInvervalId = setInterval(auto_next, auto_time);
		});
	}

	if(auto_play == true){
		//페이드배너의 수가 1개이하면 실행하지 않음
		if(obj_length > 1){
			obj_child.eq(obj_index).addClass(obj_child_acitve);
			refreshInvervalId = setInterval(auto_next, auto_time);
			auto_status = "play";
		}
	}else{
		obj_child.eq(obj_index).addClass(obj_child_acitve);
	}
	$(window).load(function(){ 
		obj_child.eq(obj_index).addClass(obj_child_animate);
	});

	//페이지번호를 사용할 경우
	if(numbering == true){
		curr_num.html(obj_index+1);
		total_num.html(obj_length);
	}

	//paging을 사용할 경우
	if(paging == true){
		paging_obj.removeClass(paging_curr_class);
		paging_obj.eq(obj_index).addClass(paging_curr_class);
		paging_obj.on("click", function(){
			paging_index = $(this).index();
			//console.log(paging_index);
			popup_change(paging_index);
      time_reset();
      AOS.init();
		});
	}

	//높이 재설정
	obj_wrap.height(obj_child.height());
	$(window).load(function(){
		obj_wrap.height(obj_child.height());
	});
	$(window).resize(function(){
		obj_wrap.height(obj_child.height());
	});
});

//fullpage 넘김
window.onload = function () {
  var elm = ".contents";
  $(elm).each(function (index) {
      // 개별적으로 Wheel 이벤트 적용
      if(index==0){ /*이벤트 적용구간 */ 
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
              e.preventDefault();
              var moveTop = $(window).scrollTop();
              var elmSelecter = $(elm).eq(index);
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
            
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 1500, complete: function () {
                }
            });
        });
      }
  });
}
