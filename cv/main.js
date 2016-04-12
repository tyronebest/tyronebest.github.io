//-------------------

//------------------
window.onload = resizeRootEm;
window.onresize= resizeRootEm;
//------------------------------------
function resizeRootEm(){
    document.documentElement.style.fontSize = 10 + window.innerWidth/100 + "px";
}