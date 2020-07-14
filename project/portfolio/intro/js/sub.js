//버튼 마우스오버시에 상위 elm 컨트롤
$(function() {  
    //nav effect
    $('.nav .front ul li')
    .on('mousemove', function(e) {
        $(this).parents().find('div.effect'+'#'+$(this).data('id')).addClass('backyes');
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $('div.effect').css({top:relY, left:relX});
    })
    .on('mouseout', function(e) {
        $(this).parents().find('div.effect').removeClass('backyes');
        $('div.effect').css({top:0, left:0});
    });
});

$(document).ready(function(){
    var header = $("header"); //헤더를 변수에 넣기
    var headerItem = $(".m_menu_bt"); //헤더를 변수에 넣기
    var start = $("section.first");
    var startOffsetTop = start.offset().top; //색상 변할 부분의 top값 구하기 
    $(window).resize(function(){
        startOffsetTop = start.offset().top; //색상 변할 부분의 top값 구하기 
    });
    $(window).on('scroll', function(){
        if($(window).scrollTop() >= startOffsetTop) { // 스크롤이 page보다 밑에 내려가면
            // header.addClass('bgnone'); //클래스 추가
            headerItem.addClass('bgblue'); //클래스 추가
        } else { // 스크롤 올릴 때
            // header.removeClass('bgnone'); //클래스 추가
            headerItem.removeClass('bgblue'); //클래스 추가
        }
    });
});

//-----------------------------모바일메뉴
$(document).ready(function(){
    // 모바일메뉴 open/close
    $(".m_menu_bt").click(function(){
        $(".nav").toggleClass("open");
        $("header").toggleClass("transpar");
        $(".m_menu_bt").toggleClass("on");
        // nav에 open클래스 추가/삭제
    });
});

// 헤더변형 및 사이드 네비 이동
$(document).ready(function(){  
    //사이드 네비 클릭 컨트롤
    $(".gotop").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 1200);
        return false
    });
});