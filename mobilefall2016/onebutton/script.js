/*
event handler for the button's for events :
mousedown
mouseup
mouseover
mouseout
*/
var btn = document.getElementById("btn");
var msg;

//the event callback function

function eventCallback(e) {
    msg.innerHTML = e.type;
}

//attach event handlers to the button
//for each of the four events mentioned above 
 btn.addEventListener("mousedown", function(event) {
    if (event.which == 1)
      console.log("Left button");
    else if (event.which == 2)
      console.log("Middle button");
    else if (event.which == 3)
      console.log("Right button");
  });