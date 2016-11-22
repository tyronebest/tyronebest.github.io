
/*
event handler for the button's for events :
mousedown
mouseup
mouseover
mouseout
*/
var btn = document.getElementById("btn");
var msg;

//the event callback funtion

function eventCallback(e){
    msg.innerHTML = e.type;
}

//attach event handlers to the button
//for each of the four events mentioned above 
btn.addEventListener("mousedown" ,function(e){
    if (eventCallback === "mousedown"){
        console.log("you hit mousedown");
    }
});