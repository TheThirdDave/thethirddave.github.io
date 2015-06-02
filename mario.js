var clicked = false;
var first = true;
var timeoutReference;


$(function(){

  $( "#grid" ).mousedown(function(event) {

    if (first) {
      $("#status").html("" + event.target.title);
    }


    if(first == false) {
      $("#status").html("Action");
      setTimeout(function() {
        if ($("#status").html() != "") {
          $("#status").html(event.target.title)
        }
      }, 500);
    }

    clicked = true;
    if(clicked ==true) {
      $("#box1").mouseenter(function(){
        $("#status").html("Jump Left");
      });
      $("#box2").mouseenter(function(){
        $("#status").html("Jump");
      });
      $("#box3").mouseenter(function(){
        $("#status").html("Jump Right");
      });
      $("#box4").mouseenter(function(){
       $("#status").html("Left");
      });
      $("#box5").mouseenter(function(){
          $("#status").html("");
      });
      $("#box6").mouseenter(function(){
        $("#status").html("Right");
      });
      $("#box7").mouseenter(function(){
        $("#status").html("Crouch Left");
      });
      $("#box8").mouseenter(function(){
        $("#status").html("Crouch");
      });
      $("#box9").mouseenter(function(){
        $("#status").html("Crouch Right");
      });
    }
  });
});

$(function() {

  $("#grid").mouseup(function() {
    window.clearTimeout(timeoutReference);
    clicked=false;
    first=false;
    $("#box1").off();
    $("#box2").off();
    $("#box3").off();
    $("#box4").off();
    $("#box5").off();
    $("#box6").off();
    $("#box7").off();
    $("#box8").off();
    $("#box9").off();
    $("#status").html("");
    timeoutReference = setTimeout(function() {
      if(clicked==false) { 
        $( "#grid" ).css( 'background', 'url("pause.png")  no-repeat center center fixed' );
      }
    }, 2000);
  });
});