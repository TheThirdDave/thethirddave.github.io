var clicked = false;
var first = true;
var timeoutReference;


$(function(){

  $( "#grid" ).on('touchstart mousedown', (function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

      if (first) {
        $("#status").html("" + event.target.title);
      }


      if(first == false) {
        $("#status").html("Action");
        $("#grid").css( 'background', 'url("action.png") no-repeat center center fixed');
        setTimeout(function() {
          if ($("#status").html() != "") {
            $("#status").html(event.target.title)
            $("#grid").css( 'background', 'url("' + event.target.getAttribute("data-pic-file") + '")  no-repeat center center fixed' );
          }
        }, 500);
      }

      clicked = true;
      if(clicked ==true) {
        $("#box1").mouseenter(function(){
          $("#status").html("Jump Left");
          $("#grid").css( 'background', 'url("jumpleft.png")  no-repeat center center fixed' );
        });
        $("#box2").mouseenter(function(){
          $("#status").html("Jump");
          $("#grid").css( 'background', 'url("jump.png")  no-repeat center center fixed' );
        });
        $("#box3").mouseenter(function(){
          $("#status").html("Jump Right");
          $("#grid").css( 'background', 'url("jumpright.png")  no-repeat center center fixed' );
        });
        $("#box4").mouseenter(function(){
         $("#status").html("Backward");
         $("#grid").css( 'background', 'url("backward.png")  no-repeat center center fixed' );
        });
        $("#box5").mouseenter(function(){
          $("#status").html("");
          $("#grid").css( 'background', 'url("neutral.png")  no-repeat center center fixed' );
        });
        $("#box6").mouseenter(function(){
          $("#status").html("Forward");
          $("#grid").css( 'background', 'url("forward.png")  no-repeat center center fixed' );
        });
        $("#box7").mouseenter(function(){
          $("#status").html("");
          $("#grid").css( 'background', 'url("neutral.png")  no-repeat center center fixed' );
        });
        $("#box8").mouseenter(function(){
          $("#status").html("Crouch");
          $("#grid").css( 'background', 'url("down.png")  no-repeat center center fixed' );
        });
        $("#box9").mouseenter(function(){
          $("#status").html("");
          $("#grid").css( 'background', 'url("neutral.png")  no-repeat center center fixed' );
        });
      }
      event.handled = true;
    } else {
      return false;
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
    $( "#grid" ).css( 'background', 'url("neutral.png")  no-repeat center center fixed' );
    timeoutReference = setTimeout(function() {
      if(clicked==false) { 
        $( "#grid" ).css( 'background', 'url("pause.png")  no-repeat center center fixed' );
      }
    }, 2000);
  });
});