

setInterval(time,1000);
function time(){
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();}