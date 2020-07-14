
//------메인 list탭 스크립트--siblings 라는 형제요소 선택자를 통해 두줄로 요약(탭스트립트)-----------
$(document).ready(function(){
    $(".tab ul.list_tabs li").click(function(){
      $(this).addClass('on').siblings().removeClass('on'); //선택한 것에 addclass on, 그 외 on제거
      $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    }); //선택한 것의 속성 id를 추출해서 클래스를 on, 그외엔 on 제거
    return false
 });//ready func close;
 
 
 //-------주요사업 탭스크립트-------//
 var fn_toggleTabMode = function() {
 
     $(".leftTabs ul li").unbind();
     //windos.width가 640보다 작거나 같으면
     if($(window).width() <= 640){
         $(".tabContentBox .bisBox").each(function(){
             $(this).appendTo(".leftTabs ul li[data-id="+this.id+"]");
         });
         $(".leftTabs ul li").click(function(){
             $(this).toggleClass('on');
             $("#"+$(this).data('id')).slideToggle(500);
             $(".leftTabs ul li").not(this).removeClass(function(){
                 $(this).removeClass('on');
                 $("#"+$(this).data('id')).slideUp(300);
             });
             return false;
         });
     //windos.width가 641보다 크면
     } else if($(window).width() > 641){
         $(".bisBox").each(function(){
             $(this).appendTo(".tabContentBox");
         });
         $(".leftTabs ul li").click(function(){
             $(".leftTabs ul li").not(this).removeClass('on');
             $(".tabContentBox .bisBox").hide();
             $(this).addClass('on');
             $("#"+$(this).data('id')).show();
             return false;
         });
     }
 }
 
 $(document).ready(function(){
     fn_toggleTabMode();
     $(window).resize(function(){
         fn_toggleTabMode();
     });
 });//ready func close;
 