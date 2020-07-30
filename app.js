$(document).ready(function () {
  console.log("hello");

//   $("#opening").fadeOut(3500);


  var timer = "";
  var timer2 = "";
  var timer3 = "";
  var timer4 = "";
  var timer5 = "";
  var timer6 = "";
  var timer7 = "";
  var timer8 = "";
  var timer9 = "";

  const highLight = async () => {
    timer = setTimeout(function () {
      $("#soft1").fadeOut(1200);
     $("#soft1").fadeIn(1200);
    }, 2000);
    timer2 = setTimeout(function () {
        $("#soft6").fadeOut(1200);
       $("#soft6").fadeIn(1200);
      }, 4000);
      timer3 = setTimeout(function () {
        $("#soft3").fadeOut(1200);
       $("#soft3").fadeIn(1200);
      }, 6000);  
      timer4 = setTimeout(function () {
        $("#soft7").fadeOut(1500);
       $("#soft7").fadeIn(1400);
      }, 8000);  
      timer5 = setTimeout(function () {
        $("#soft4").fadeOut(1200);
       $("#soft4").fadeIn(1200);
      }, 10000);  
      timer6 = setTimeout(function () {
        $("#soft2").fadeOut(1600);
       $("#soft2").fadeIn(1600);
      }, 12000);  
      timer7 = setTimeout(function () {
        $("#soft5").fadeOut(1200);
       $("#soft5").fadeIn(1200);
      }, 14000);
      timer8 = setTimeout(function () {
        $("#soft8").fadeOut(1600);
       $("#soft8").fadeIn(1700);
      }, 14000);

      timer = setTimeout(function () {
        $("#soft9").fadeOut(1200);
       $("#soft9").fadeIn(1200);
      }, 2000);
      timer2 = setTimeout(function () {
          $("#soft15").fadeOut(1500);
         $("#soft15").fadeIn(1300);
        }, 4300);
        timer3 = setTimeout(function () {
          $("#soft12").fadeOut(1000);
         $("#soft12").fadeIn(1000);
        }, 6000);  
        timer4 = setTimeout(function () {
          $("#soft10").fadeOut(1100);
         $("#soft10").fadeIn(1200);
        }, 8300);  
        timer5 = setTimeout(function () {
          $("#soft14").fadeOut(1500);
         $("#soft14").fadeIn(1500);
        }, 10300);  
        timer6 = setTimeout(function () {
          $("#soft11").fadeOut(1400);
         $("#soft11").fadeIn(1400);
        }, 12300);  
        timer7 = setTimeout(function () {
          $("#soft13").fadeOut(1200);
         $("#soft13").fadeIn(1300);
        }, 14000);
        timer8 = setTimeout(function () {
            $("#soft16").fadeOut(1200);
           $("#soft16").fadeIn(1600);
          }, 15500);
highLight();


  }


  highLight()
});
