// JavaScript Document

function game(){
	"use strict";
var ball={x:150,y:350};
var dir={x:1,y:1};
var bar={x1:1,x2:1,x3:1};

document.getElementById("moveupdown").style.top=10+"px";
document.getElementById("moveupdown").style.height=100+"px";

setInterval(function(){
	
	if(ball.x<=0){dir.x=1;}
	if(ball.x>=290){dir.x=-1;}
	if(ball.y<=0){dir.y=1;}
	if(ball.y>=690){dir.y=-1;}	
	ball.x+=10*dir.x;
	ball.y+=10*dir.y;
	//var direction=Math.floor(Math.random()*9+1);
	//console.log("ball.x= "+ball.x);
	//console.log("top= "+document.getElementById("ball").style.top);
	//console.log("left= "+document.getElementById("ball").style.left);
	
	document.getElementById("ball").style.top=ball.x+"px";
	document.getElementById("ball").style.left=ball.y+"px";
	bar.x1=parseInt(document.getElementById("moveupdown").style.top);
	bar.x2=parseInt(document.getElementById("moveupdown").style.top)+100;
	bar.x3=document.getElementById("moveupdown").style.height;

	//parseInt(a, 10)
	console.log(bar);
	document.getElementById("moveupdown").style.height=ball.x+"px";
	},300);

 

}

function move(event) {
	"use strict";
	 
	var top =  parseInt(document.getElementById('moveupdown').style.top);
    var key = event.keyCode,
        chrId = document.getElementById('moveupdown'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
					if (key === 38) {
					   if(y>0){
							y-=10;
						}
					} else if (key === 40) {
						if(y<=290){
						y+=10;
						}
						 
					}
					
					return y;
					}
        };

    chrId.style.top = (chr.updown()) + "px";
	
	console.log(document.getElementById('moveupdown').style.height);
   
   
}

document.addEventListener('keydown', move);
