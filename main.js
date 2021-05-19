$(function () {

    $(window).scroll(function () {
      var T = $(window).scrollTop();
      $("#fixnav").css({ "top": T + 300 });
      if (T <= $("#opening-wrapper").offset().top - 300) {
        $("#fixnav,#fixnav>div").css({ "border": "4px solid #fff9b8" });
        $("#fixnav>#one").css({ background: "#62D173" });
        $("#fixnav>#two").css({ background: "#e29359" });
      }
      if (T >= $("#opening-wrapper").offset().top - 300) {
        $("#fixnav,#fixnav>div").css({ "border": "4px solid #1c793c" });
        $("#fixnav>#one").css({ background: "#e29359" });
        $("#fixnav>#two").css({ background: "#62D173" });
        $("#fixnav>#three").css({ background: "#e29359" });
      }
      if (T >= $("#world-wrapper").offset().top - 300) {
        $("#fixnav,#fixnav>div").css({ "border": "4px solid #fff9b8" });
        $("#fixnav>#two").css({ background: "#e29359" });
        $("#fixnav>#four").css({ background: "#e29359" });
        $("#fixnav>#three").css({ background: "#62D173" });
      }
      if (T >= $("#korea-wrapper").offset().top - 300) {
        $("#fixnav,#fixnav>div").css({ "border": "4px solid #1c793c" });
        $("#fixnav>#four").css({ background: "#62D173" });
        $("#fixnav>#three").css({ background: "#e29359" });
        $("#fixnav>#five").css({ background: "#e29359" }); 
      }
      if (T >= $("#booker-wrapper").offset().top - 300){
        $("#fixnav>#five").css({ background: "#62D173" });  
        $("#fixnav>#four").css({ background: "#e29359" });
      }
    });



    $("#check").click(function () {
      $("#surface").css({ "opacity": "1" });
      $("#page1,#page2").css({ "opacity": "1" });
      $("#surface,#page1,#page2").addClass("add");

    });
    $("#surface,#page1").click(function () {
      $("#surface").toggleClass("on");
      $("#page1").toggleClass("on");
    });
    var n = 0;
    setInterval(function () {
      n++;
      if (n == 1) {
        $("#top").animate({ "left": "0px" }, 500);
        $("#bottom").animate({ "right": "0px" }, 500);
        $("#check").animate({ "marginLeft": "2px" }, 200);
      }
      else if (n == 2) {
        $("#right").animate({ "top": "0px" }, 500);
        $("#left").animate({ "bottom": "0px" }, 500);
        $("#check").animate({ "marginLeft": "-2px" }, 200);
      }
      else if (n == 3) {
        $("#top").animate({ "left": "50px" }, 500);
        $("#bottom").animate({ "right": "50px" }, 500);
        $("#check").animate({ "marginLeft": "3px" }, 100);
      }
      else if (n == 4) {
        $("#right").animate({ "top": "240px" }, 500);
        $("#left").animate({ "bottom": "240px" }, 500);
        $("#check").animate({ "marginLeft": "-4px" }, 100);
      }
      else if (n == 5) {
        n = 0;
        $("#top").animate({ "left": "-50px" }, 0);
        $("#right").animate({ "top": "-240px" }, 0);
        $("#bottom").animate({ "right": "-50px" }, 0);
        $("#left").animate({ "bottom": "-240px" }, 0);
      }

    }, 500);

    $("#prologue>img").click(function () {
      $(this).css({ "opacity": "0" });
      var x = -1;
      setInterval(function () {
        x++;
        $("#prologue>p>span").eq(x).addClass("on");
        if (x > 25) {
          $("#snow-back").css({ "opacity": "1" });
          $("#prologue>p>span").css({ "color": "black" });
        }
      }, 100);


    });

    var a = -1;
    $("#opening>div").eq(4).addClass("on");
    $("#opening>div").eq(4).find("img").addClass("on");

    $("#opening>div").click(function () {
      $("#opening>div").removeClass("on");
      $(this).addClass("on");
      $("#opening>div>div>img").removeClass("on");
      $(this).find("img").addClass("on");

    });

    $("#opening>div>div>img").click(function () {
      $(this).css({ "opacity": "0" });
      $(this).prev().css({"opacity": "0" });
      var a = -1;
      var cjb = $(this);
      var cjb001 = $(this).next().children();
      var repeat = setInterval(function () {
        a++;
        cjb001.eq(a).css({ "opacity": "1", "transform": "translateX(0)" });
        if (a > 45) {
          cjb.next().next().find("img").addClass("add");
          cjb.next().next().find("p").addClass("on");

          cjb.css({ "opacity": "1" });
          cjb001.css({ "opacity": "0", "transform": "translateX(-50%)" });
          // a=-1;
          cjb.prev().css({"opacity": "1" });
          clearInterval(repeat);

        }
      }, 100);
    });

    $("#world>ul>li").eq(0).addClass("on");
    $("#world>ul>li").click(function(){
      $("#world>ul>li").removeClass("on");
      $(this).addClass("on");
      var B = $(this).index();
      // $(this).find("#tablet-slider").css({"marginLeft":"0"});
      // $("#eu-nav>li:first").addClass("on");
      // $("#eu-nav>li").removeClass("on");
      // $("#world #orient #eu-nav>li").removeClass("oon");
      // $(this).find("#eu-nav").children("li").eq(0).addClass("oon");
    });
    $("#world #eu #eu-nav>li").eq(0).addClass("oon");
    $("#world #orient #eu-nav>li").eq(0).addClass("oon");
    $("#world #america #eu-nav>li").eq(0).addClass("oon");
    $("#world #eu-nav>li").click(function(){
      $(this).siblings().removeClass("oon");
      $(this).addClass("oon");
      var C=$(this).index();
      $(this).parents().siblings("div").children("#tablet-slider").animate({"marginLeft":"-640"*C+"px"},500);
     //  $("#tablet-slider").animate({"marginLeft":"-640"*C+"px"},500);
   });


    $("#korea>ul>li").eq(2).addClass("on");
    $("#korea>ul>li").click(function () {
      $("#korea>ul>li").removeClass("on");
      $(this).addClass("on");
    });

    var W=0;
    $("#next1").click(function(){
      var cjb3=$(this);
       if(W<4){
         W++;
        //  $("#slider").animate({"left":"-147"*W+"px"},300);
         cjb3.siblings().find("#slider").animate({"left":"-145"*W+"px"},300);
       }    
    });
    $("#prev1").click(function(){
    
       if(W>0){
          W--;
         $("#slider").animate({"left":"-145"*W+"px"},300); 
       }    
    });
    
    var E=0;
    $("#eu #tablet2>#next1").click(function(){
      
       if(E<4){
         E++;
         $("#eu #tablet2 #slider").animate({"left":"-145"*E+"px"},300);
       }    
    });
    $("#eu #tablet2>#prev1").click(function(){
    
       if(E>0){
          E--;
         $("#eu #tablet2 #slider").animate({"left":"-145"*E+"px"},300); 
       }    
    });

    var R=0;
    $("#orient #tablet1 #next1").click(function(){  
      
      if(R<4){
        R++;
        $("#orient #tablet1 #slider").animate({"left":"-145"*R+"px"},300);
      }    
   });
   $("#orient #tablet1 #prev1").click(function(){
   
      if(R>0){
         R--;
        $("#orient #tablet1 #slider").animate({"left":"-145"*R+"px"},300); 
      }    
   });

   var Y=0;
   $("#orient #tablet2 #next1").click(function(){  
     
     if(Y<4){
       Y++;
       $("#orient #tablet2 #slider").animate({"left":"-145"*Y+"px"},300);
     }    
  });
  $("#orient #tablet2 #prev1").click(function(){
  
     if(Y>0){
        Y--;
       $("#orient #tablet2 #slider").animate({"left":"-145"*Y+"px"},300); 
     }    
  });

  var R1=0;
  $("#america #tablet1 #next1").click(function(){  
    
    if(R1<4){
      R1++;
      $("#america #tablet1 #slider").animate({"left":"-145"*R1+"px"},300);
    }    
 });
 $("#america #tablet1 #prev1").click(function(){
 
    if(R1>0){
       R1--;
      $("#america #tablet1 #slider").animate({"left":"-145"*R1+"px"},300); 
    }    
 });

 var R2=0;
  $("#america #tablet2 #next1").click(function(){  
    
    if(R2<4){
      R2++;
      $("#america #tablet2 #slider").animate({"left":"-145"*R2+"px"},300);
    }    
 });
 $("#america #tablet2 #prev1").click(function(){
 
    if(R2>0){
       R2--;
      $("#america #tablet2 #slider").animate({"left":"-145"*R2+"px"},300); 
    }    
 });


    $("#world-wrapper").find(".ex-wrapper").children().eq(0).addClass("on");
    $("#tablet2 .ex-wrapper>div").eq(0).addClass("on");
    $("#orient #tablet2 .ex-wrapper>div").eq(0).addClass("on");
    $("#orient .ex-wrapper>div").eq(0).addClass("on");
    $("#slider>img").eq(0).addClass("on");
    $("#tablet2 #slider>img").eq(0).addClass("on");
    $("#orient #tablet2 #slider>img").eq(0).addClass("on");
    $("#orient #slider>img").eq(0).addClass("on");

    $("#america #slider>img").eq(0).addClass("on");
    $("#america #tablet2 #slider>img").eq(0).addClass("on");
    $("#america #tablet2 .ex-wrapper>div").eq(0).addClass("on");
    $("#america .ex-wrapper>div").eq(0).addClass("on");

    $("#slider>img").click(function(){
       var Q=$(this).index();
       $(this).siblings().removeClass("on");
       $(this).addClass("on");
       $(this).parents().parents().next().next().next().children().removeClass("on");
       $(this).parents().parents().next().next().next().children().eq(Q).addClass("on");
    });
    var ud=0;
    $("#eu #down").click(function(){  
       
      if(ud<2){
        ud++;
        $("#eu #check-slider").css({"top":"-200"*ud+"px"});
      }
      if(ud==0){
        $("#eu #up").removeClass("on");
      }else{
        $("#eu #up").addClass("on");
      }
      if(ud==2){
        $("#eu #down").addClass("on"); 
      }else{
        $("#eu #down").removeClass("on");
      }
      $("#eu #tablet3>p").removeClass("act");
      $("#eu #tablet3>p").eq(ud).addClass("act");
      console.log(ud);
    });
    $("#eu #up").click(function(){
      if(ud>0){
        ud--;
        $("#eu #check-slider").css({"top":"-200"*ud+"px"});
      }
      if(ud==0){
        $("#eu #up").removeClass("on");
      }else{
        $("#eu #up").addClass("on");
      }
      if(ud==2){
        $("#eu #down").addClass("on"); 
      }else{
        $("#eu #down").removeClass("on");
      }
      $("#eu #tablet3>p").removeClass("act");
      $("#eu #tablet3>p").eq(ud).addClass("act");
      console.log(ud);
    });


   
    $("#eu #tablet3>p").eq(ud).addClass("act");



    var ud2=0;
    $("#orient #down").click(function(){  
      $("#orient #up").addClass("on"); 
      if(ud2<2){
        ud2++;
        $("#orient #check-slider").css({"top":"-200"*ud2+"px"});
      }
      if(ud2==0){
        $("#orient #up").removeClass("on");
      }else{
        $("#orient #up").addClass("on");
      }
      if(ud2==2){
        $("#orient #down").addClass("on"); 
      }else{
        $("#orient #down").removeClass("on");
      }

      $("#orient #tablet3>p").removeClass("act");
      $("#orient #tablet3>p").eq(ud2).addClass("act");
      console.log(ud2);
    });
    $("#orient #up").click(function(){
      if(ud2>0){
        ud2--;
        $("#orient #check-slider").css({"top":"-200"*ud2+"px"});
      }
      if(ud2==0){
        $("#orient #up").removeClass("on");
      }else{
        $("#orient #up").addClass("on");
      }
      if(ud2==2){
        $("#orient #down").addClass("on"); 
      }else{
        $("#orient #down").removeClass("on");
      }

      $("#orient #tablet3>p").removeClass("act");
      $("#orient #tablet3>p").eq(ud2).addClass("act");
      console.log(ud2);
    });

    $("#orient #tablet3>p").eq(ud2).addClass("act");


    var ud3=0;
    $("#america #down").click(function(){  
      $("#america #up").addClass("on"); 
      if(ud3<2){
        ud3++;
        $("#america #check-slider").css({"top":"-200"*ud3+"px"});
      }
      if(ud3==0){
        $("#america #up").removeClass("on");
      }else{
        $("#america #up").addClass("on");
      }
      if(ud3==2){
        $("#america #down").addClass("on"); 
      }else{
        $("#america #down").removeClass("on");
      }
      
      $("#america #tablet3>p").removeClass("act");
      $("#america #tablet3>p").eq(ud3).addClass("act");
      console.log(ud3);
    });
    $("#america #up").click(function(){
      if(ud3>0){
        ud3--;
        $("#america #check-slider").css({"top":"-200"*ud3+"px"});
      }
      if(ud3==0){
        $("#america #up").removeClass("on");
      }else{
        $("#america #up").addClass("on");
      }
      if(ud3==2){
        $("#america #down").addClass("on"); 
      }else{
        $("#america #down").removeClass("on");
      }
      $("#america #tablet3>p").removeClass("act");
      $("#america #tablet3>p").eq(ud3).addClass("act");
      console.log(ud3);
    });
    
    $("#america #tablet3>p").eq(ud3).addClass("act");

    $("#slide-bullet>div").eq(0).addClass("on");
    $("#slide-bullet>div").click(function(){
        var D=$(this).index();
        $("#slide-bullet>div").removeClass("on");
        $(this).addClass("on");
        $("#genreslider").css({"margin-top":"-370"*D+"px"});  
    });

    $(".contents>div").hover(function(){
          $(this).children("div").css({"top":"0"}); 
    },function(){
          $(this).children("div").css({"top":"230px"}); 
    });
    
    $("#knew>div").eq(0).addClass("add");
    $("#introbutton>div").eq(0).addClass("on1");
    $("#introbutton>div").click(function(){
      var int=$(this).index();
      $("#knew>div").removeClass("add");
      $("#knew>div").eq(int).addClass("add");
      $("#introbutton>div").removeClass("on1");
      $(this).addClass("on1");
  
    });
    var bi=0;
    $("#bestex-wrapper>div").eq(bi).addClass("on");
    $("#bprev").click(function(){
      if(bi>0){
          bi--;
          $("#best-slider").css({"left":"-205"*bi+"px"});
      }
      $("#bestex-wrapper>div").removeClass("on");
      $("#bestex-wrapper>div").eq(bi).addClass("on");
    });
    $("#bnext").click(function(){
      if(bi<4){
          bi++;
          $("#best-slider").css({"left":"-205"*bi+"px"});
      }
      $("#bestex-wrapper>div").removeClass("on");
      $("#bestex-wrapper>div").eq(bi).addClass("on");
    });

    $("#booker>ul>li").eq(1).addClass("on");
    $("#booker>ul>li").click(function () {
      $("#booker>ul>li").removeClass("on");
      $(this).addClass("on");
    });

    $("#qurateex-wrapper>div").eq(0).addClass("on");
    $("#qurate>img").eq(0).addClass("on")
    $("#qurate>img").click(function(){
      $("#qurate>img").removeClass("on");
      $(this).addClass("on");
      var qu = $(this).index();
      $("#qurateex-wrapper>div").removeClass("on");
      $("#qurateex-wrapper>div").eq(qu).addClass("on");
    });

    $("#note-wrapper>div").eq(0).addClass("on");
    $("#note-wrapper>div").click(function(){
       $("#note-wrapper>div").removeClass("on");
       $(this).addClass("on");
    });
    $("#liex-wrapper>div").eq(0).addClass("on");
    $("#liex-wrapper>div").eq(0).children("p").addClass("on");
    $("#liex-wrapper>div").eq(0).children("#star5").addClass("on");
    $("#note-wrapper>#note1>ul>li").eq(0).addClass("on");  
    $("#note-wrapper>#note1>ul>li").eq(0).find("h3,h4").addClass("on");
    $("#note-wrapper>#note1>ul>li").click(function(){
       var note=$(this).index();
       $("#note-wrapper>#note1>ul>li").removeClass("on");
       $("#note-wrapper>#note1>ul>li").find("h3,h4").removeClass("on");
       $(this).addClass("on");  
       $(this).find("h3,h4").addClass("on");
       $("#note1>#liex-wrapper>.li-ex").removeClass("on");
       $("#note1>#liex-wrapper>.li-ex").eq(note).addClass("on");
       $("#note1>#liex-wrapper>div").children("p").removeClass("on");
       $("#note1>#liex-wrapper>div").eq(note).children("p").addClass("on");
       $("#note1>#liex-wrapper>div").children("#star5").removeClass("on");
       $("#note1>#liex-wrapper>div").eq(note).children("#star5").addClass("on");
    });
    
    $("#note2>#liex-wrapper>div").eq(0).addClass("on");
    $("#note2>#liex-wrapper>div").eq(0).children("p").addClass("on");
    $("#note2>#liex-wrapper>div").eq(0).children("#star5").addClass("on");
    $("#note-wrapper>#note2>ul>li").eq(0).addClass("on2");  
    $("#note-wrapper>#note2>ul>li").eq(0).find("h3,h4").addClass("on2");
    $("#note-wrapper>#note2>ul>li").click(function(){
       var note2=$(this).index();
       $("#note-wrapper>#note2>ul>li").removeClass("on2");
       $("#note-wrapper>#note2>ul>li").find("h3,h4").removeClass("on2");
       $(this).addClass("on2");  
       $(this).find("h3,h4").addClass("on2");
       $("#note2>#liex-wrapper>.li-ex").removeClass("on");
       $("#note2>#liex-wrapper>.li-ex").eq(note2).addClass("on");
       $("#note2>#liex-wrapper>div").children("p").removeClass("on");
       $("#note2>#liex-wrapper>div").eq(note2).children("p").addClass("on");
       $("#note2>#liex-wrapper>div").children("#star5").removeClass("on");
       $("#note2>#liex-wrapper>div").eq(note2).children("#star5").addClass("on");
    });

    $("#note3>#liex-wrapper>div").eq(0).addClass("on");
    $("#note3>#liex-wrapper>div").eq(0).children("p").addClass("on");
    $("#note3>#liex-wrapper>div").eq(0).children("#star5").addClass("on");
    $("#note-wrapper>#note3>ul>li").eq(0).addClass("on");  
    $("#note-wrapper>#note3>ul>li").eq(0).find("h3,h4").addClass("on");
    $("#note-wrapper>#note3>ul>li").click(function(){
       var note2=$(this).index();
       $("#note-wrapper>#note3>ul>li").removeClass("on");
       $("#note-wrapper>#note3>ul>li").find("h3,h4").removeClass("on");
       $(this).addClass("on");  
       $(this).find("h3,h4").addClass("on");
       $("#note3>#liex-wrapper>.li-ex").removeClass("on");
       $("#note3>#liex-wrapper>.li-ex").eq(note2).addClass("on");
       $("#note3>#liex-wrapper>div").children("p").removeClass("on");
       $("#note3>#liex-wrapper>div").eq(note2).children("p").addClass("on");
       $("#note3>#liex-wrapper>div").children("#star5").removeClass("on");
       $("#note3>#liex-wrapper>div").eq(note2).children("#star5").addClass("on");
    });
    
    $("#tab1").addClass("on");
    $("#tab1>h1").addClass("on");
    $(".notetab").click(function(){
      $(".notetab").removeClass("on");
      $(".notetab").find("h1").removeClass("on");
      $(this).addClass("on");
      $(this).find("h1").addClass("on");
    });


  });