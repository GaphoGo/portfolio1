$(function(){ 
  function slideImg(){
    var now = $(".imgs > img:first");
    $(".imgs").stop().animate({"left":"-1170px"},1000,function(){
      $(this).append(now).css("left","0px");
     
    })
  }
  var timer = setInterval(slideImg,3000)

  $("#imgSlide > button").hover(//button에 hover이벤트 생성
    function(){//mouseover시
      clearInterval(timer); //timer에 들어있는 반복함수를 제거
    },function(){//mouseout시
      timer = setInterval(slideImg,3000);
      //timer변수에 반복함수를 다시 할당합니다.
    }
  )

  //next버튼 클릭시
  $(".next").click(function(){ //.next버튼 클릭시
    if($(".imgs").is(":animated")) return false;

    var now = $(".imgs > img:first");
    $(".imgs").animate({"left":"-1170px"},300,function(){
      $(this).append(now).css("left","0px");
    })
  })

  //prev버튼 클릭시
  $(".prev").click(function(){
    if($(".imgs").is(":animated")) return false;
    var last = $(".imgs > img:last");//마지막 이미지 요소를 last변수에 할당.
    $(".imgs").prepend(last).css("left","-1170px").animate({"left":0},300);
  })
});