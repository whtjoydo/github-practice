$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 550)
        $(".header").addClass("hideBar");
    else if (scroll < 549)
        $(".header").removeClass("hideBar");
});

$(document).ready(function() {
    var $menu = $("#menu"),
    $menulink = $(".menuBt");

    $menulink.click(function(){
        $menulink.toggleClass('on');
        $menu.toggleClass('open');
    });

    if($(window).width() < 641){
        $(".mSub").hide();
        $(".gnbMenu > .title").click(function(){
            $(this).next().slideToggle(300);
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
        });

        $(".closeBtn").click(function(){
            $menu.removeClass('open');
        });
    };
});

$(document).ready(function() {
   $(".goTop").click(function(){
       $("html, body").animate({
           scrollTop : 0
       }, 1000);
   });
   
   var section3 = $(".section3").scrollTop();
   $(".goSection3").click(function(){
       $("html, body").animate({
           scrollTop : section3
       }, 500);
   });

   var section5 = $(".section5").scrollTop();
   $(".goSection5").click(function(){
       $("html, body").animate({
           scrollTop : section5
       }, 500);
   });
   
   var footer = $("footer").scrollTop();
   $(".goFooter").click(function(){
       $("html, body").animate({
           scrollBottom : footer
       }, 500);
   });
});

$(document).ready(function(){
    $(".tab ul.list_tabs li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');;
    });
});//ready func close;

$(document).ready(function(){
    $(".listBox.n2 .tab ul.list_tabs li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("."+$(this).attr('id')).addClass('on').siblings().removeClass('on');;
    });

    $(".spot1_on").click(function(){
        $("html, body").animate({
            scrollTop : spot
        }, 500);
    });

    var spot = $("#spot01").offset().top;
    if (location.hash == "#spot01"){
        $(".listBox.n2").find('li').eq(0).addClass('on').siblings().removeClass('on');
        $(".section6").find('spot01').addClass('on').siblings().removeClass('on')
    } eles if (location.hash == "#spot02"){
        $(".listBox.n2").find('li').eq(1).addClass('on').siblings().removeClass('on');
        $(".section6").find('spot01').addClass('on').siblings().removeClass('on')
    } eles if (location.hash == "#spot03"){
        $(".listBox.n2").find('li').eq(2).addClass('on').siblings().removeClass('on');
        $(".section6").find('spot01').addClass('on').siblings().removeClass('on')
    } eles if (location.hash == "#spot04"){
        $(".listBox.n2").find('li').eq(3).addClass('on').siblings().removeClass('on');
        $(".section6").find('spot01').addClass('on').siblings().removeClass('on')
    }
});//ready func close;