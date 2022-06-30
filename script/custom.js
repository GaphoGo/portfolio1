$(function(){//document.ready
  //#play에 클릭이벤트 생성
  $("#play").click(function(){
    $(this).css("display","none");//play버튼 제거
    $("#stop").css("display","block");//stop버튼 표시

    $("#vid").get(0).play();//video를 play메서드로 영상재생합니다.
  })
  //#stop에 클릭이벤트 생성
  $("#stop").click(function(){
    $(this).css("display","none");
    $("#play").css("display","block");
    $("#vid").get(0).pause();//video를 pause메서드로 영상을 멈춰줍니다.
    //$("#vid").get(0).currentTime = 0;//영상프레임을 처음(0)위치로 이동
  });

  //영상이 끝난 뒤 구문 실행
  $("#vid").on("ended",function(){
    $("#play").css("display","block");
    $("#stop").css("display","none");
    $("#vid").get(0).load();//video를 다시 로드하여 초기상태로 돌림
  })
 });