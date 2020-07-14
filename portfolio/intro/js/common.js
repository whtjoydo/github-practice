
//skill chart
$(function() {  
angular.module('app', [])
    .controller('MainController', function($scope, $timeout) {
        var traits = [];
        $scope.refresh = function() {
            traits = $scope.traits;
            $scope.traits = '';
            $timeout(function() {
                $scope.traits = traits;
            }, 1);
        }
        $scope.traits = [{
            'name': 'Design',
            'level': .85,
            'passion': 1.0
        }, {
            'name': 'HTML/CSS',
            'level': .95,
            'passion': .85
        }, {
            'name': 'Illustration',
            'level': .70,
            'passion': .95
        }, {
            'name': 'UI/UX',
            'level': .75,
            'passion': .90
        }, {
            'name': 'JQuary',
            'level': .65,
            'passion': .95
        }, 
        //{
        //    'name': 'DB/SERVER',
        //    'level': .20,
        //    'passion': .70
        //},
        // {
        //     'name': 'MotionGraphic',
        //     'level': .30,
        //     'passion': .70
        // },
        // {
        //     'name': 'photograph',
        //     'level': .50,
        //     'passion': .70
        // }
        ];
    })
    .directive('circle', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                'circleSize': '=',
                'circleValue': '=',
                'circleStroke': '=',
                'circleDelay': '='
            },
            link: function(scope, element, attrs) {
                var w = 100,
                    s = 4,
                    delay = scope.circleDelay || 0,
                    full = (w + s) * 3,
                    percentage = full * (1 - scope.circleValue),
                    viewBox = '-' + s / 2 + ' -' + s / 2 + ' ' + (w + s) + ' ' + (w + s),
                    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                    circleBase = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
                    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

                svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svg.setAttribute('width', w + s);
                svg.setAttribute('height', w + s);
                svg.setAttribute('viewBox', viewBox);

                circleBase.setAttribute('cx', w / 2);
                circleBase.setAttribute('cy', w / 2);
                circleBase.setAttribute('r', w / 2);
                circleBase.setAttribute('fill', 'none');
                circleBase.setAttribute('stroke', '#CCCCCC');
                circleBase.setAttribute('stroke-width', s);

                circle.setAttribute('cx', w / 2);
                circle.setAttribute('cy', w / 2);
                circle.setAttribute('r', w / 2);
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', '#1378eb');
                circle.setAttribute('stroke-width', s);
                circle.setAttribute('stroke-dasharray', full);
                circle.setAttribute('stroke-dashoffset', full);
                circle.setAttribute('transform', 'rotate(-90 50 50)');
                circle.setAttribute('style', 'transition: all 1s cubic-bezier(.3,.53,0,1)');

                svg.appendChild(circleBase);
                svg.appendChild(circle);

                element.append(svg);

                $timeout(function() {
                    circle.setAttribute('stroke-dashoffset', percentage);
                }, 1 + delay);

            }
        }
    });
});

//비주얼 버튼 마우스 오버 효과
$(function() {  
    $('section.hoverme')
    .on('mousemove', function(e) {
        $(this).find('.mouseover').css({
            left : e.pageX,
            top : e.pageY
        })
    })
    .on('mouseout', function(e) {
        $(this).find('.mouseover').css({
            left : e.pageX,
            top : e.pageY
        })
    });
});

//버튼 마우스오버시에 상위 elm 컨트롤
$(function() {  
    $('.work-item .btn')
    .on('mouseover', function(e) {
        $(this).parents($('.work-item')).addClass('hover');
    })
    .on('mouseout', function(e) {
        $(this).parents($('.work-item')).removeClass('hover');
    });
    
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

//career on일때 라인 생성
$(document).ready(function(){
    // var header = $("header"); //헤더를 변수에 넣기
    var headerItem = $(".m_menu_bt"); //헤더를 변수에 넣기
    var start = $("section.first"); //헤더를 변수에 넣기
    var career = $("section.career"); //헤더를 변수에 넣기
    var startOffsetTop = start.offset().top; //색상 변할 부분의 top값 구하기 
    var pageOffsetTop = career.offset().top; //색상 변할 부분의 top값 구하기 
    $(window).resize(function(){
        startOffsetTop = start.offset().top; //색상 변할 부분의 top값 구하기 
        pageOffsetTop = career.offset().top; //색상 변할 부분의 top값 구하기 
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
    
    $(window).on('scroll', function(){
        if($(window).scrollTop() >= pageOffsetTop - 450) { // 스크롤이 page보다 밑에 내려가면
            career.addClass('on'); //클래스 추가
        } else { // 스크롤 올릴 때
            career.removeClass('on'); //클래스 추가
        }
    });
});

//more control
$(document).ready(function(){
    $(".list-end .more").click(function(){
        $(this).parents().find($(".work-item.more")).toggleClass('on');
        return false
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


//-------모바일 모드 토글-------//
var fn_toggleMode = function() {
    //windos.width가 1024보다 작거나 같으면
    if($(window).width() <= 1024){
        $('body').addClass('mode');
    //windos.width가 641보다 크면
    } else if($(window).width() >= 1024){
        $('body').removeClass('mode');
    }
}

$(document).ready(function(){
    fn_toggleMode();
    $(window).resize(function(){
        fn_toggleMode();
    });
});