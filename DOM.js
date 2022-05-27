// create Array
var button = document.getElementById("btn");

// accessing array with addEventListener
button.addEventListener('mouseover',overfunction);
button.addEventListener('click',clickfunction);
button.addEventListener('mouseout',outfunction);
 
function overfunction(){
    document.getElementById("display").innerHTML += "Moused Over!<br>";
}
function clickfunction(){
    document.getElementById("display").innerHTML += "Clicked!<br>";

}
function outfunction(){
    document.getElementById("display").innerHTML += "Moused out!<br>";
}