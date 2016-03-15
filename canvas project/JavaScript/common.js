$(	document).ready(function(){
	"use strict";
	var c = document.getElementById("drawing1");
	var ctx = c.getContext("2d");
	
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();
  
});