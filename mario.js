var clicked = false;
var first = true;
var timeoutReference;

// handles the mousedown and touchstart events for gestures
$(function(){
  $( "#grid" ).on('touchstart mousedown', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

      // handles the case when it is the first click/touch from a user
      if (first) {
        $("#status").html("" + event.target.title);
      }

      //looks for if this ISN'T the first time the click/touch event has fired since a pause
      //if it is not then fires an action content
      if(first == false) {
        $("#status").html("Action");
        $("#grid").css( 'background', 'url("action.png") no-repeat center center fixed');
        setTimeout(function() {
          if ($("#status").html() != "") {
            $("#status").html(event.target.title);
            $("#grid").css( 'background', 'url("' + event.target.getAttribute("data-pic-file") + '")  no-repeat center center fixed' );
          }
        }, 500);
      }


      //could probably be cleaned up into just one function but I'm too lazy right now
      //handles the mouse enter states
      clicked = true;
      if(clicked ==true) {
        $("#box1").on('mouseenter', function(){
          $("#status").html("Jump Left");
          $("#grid").css( 'background', 'url("jumpleft.png")  no-repeat center center fixed');
        });
        $("#box2").on('mouseenter', function(){
          $("#status").html("Jump");
          $("#grid").css( 'background', 'url("jump.png")  no-repeat center center fixed' );
        });
        $("#box3").on('mouseenter', function(){
          $("#status").html("Jump Right");
          $("#grid").css( 'background', 'url("jumpright.png")  no-repeat center center fixed' );
        });
        $("#box4").on('mouseenter', function(){
         $("#status").html("Backward");
         $("#grid").css( 'background', 'url("backward.png")  no-repeat center center fixed' );
        });
        $("#box5").on('mouseenter', function(){
          $("#status").html("");
          $("#grid").css( 'background', 'url("neutral.png")  no-repeat center center fixed' );
        });
        $("#box6").on('mouseenter', function(){
          $("#status").html("Forward");
          $("#grid").css( 'background', 'url("forward.png")  no-repeat center center fixed' );
        });
        $("#box7").on('mouseenter', function(){
          $("#status").html("");
          $("#grid").css( 'background', 'url("neutral.png")  no-repeat center center fixed' );
        });
        $("#box8").on('mouseenter', function(){
          $("#status").html("Crouch");
          $("#grid").css( 'background', 'url("down.png")  no-repeat center center fixed' );
        });
        $("#box9").on('mouseenter', function(){
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

//For touch devices to be able to interact with device
$(function() {
  $("#grid").on('touchmove', function(event) {
    event.preventDefault();
    //grab touch event
    var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouces[0];
    //get the dom element that current touch is over
    var current = document.elementFromPoint(touch.pageX, touch.pageY);
    //display corresponding content
    $("#status").html(current.title);
    $("#grid").css( 'background', 'url("' + current.getAttribute("data-pic-file") + '")  no-repeat center center fixed' );
  });
});

$(function() {

  $("#grid").on('touchend mouseup', function() {
    //resets the timeout timer
    window.clearTimeout(timeoutReference);
    clicked=false;
    first=false;
    //turns off events so they only happen when a click our touch is happening
    $("#box1").off();
    $("#box2").off();
    $("#box3").off();
    $("#box4").off();
    $("#box5").off();
    $("#box6").off();
    $("#box7").off();
    $("#box8").off();
    $("#box9").off();
    //reset the conent to a neutral state
    $("#status").html("");
    $( "#grid" ).css( 'background', 'url("neutral.png")  no-repeat center center fixed' );
    //this is so the pause has a slight delay; allows for action clicks to happen
    timeoutReference = setTimeout(function() {
      if(clicked==false) { 
        $( "#grid" ).css( 'background', 'url("pause.png")  no-repeat center center fixed' );
      }
    }, 2000);
  });
});