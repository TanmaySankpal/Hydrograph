var c= document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(5,0);
ctx.lineTo(5,450);
ctx.stroke();
ctx.closePath();

drawLine(ctx,10,0,10,450);