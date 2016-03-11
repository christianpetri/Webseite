// JavaScript Document

function game(){
	"use strict";
var ball={x:150,y:150};

 

setInterval(function(){
	
		
	ball.x+=10;
	if(ball.x>=300){ball.x=150;}
	console.log(ball.x);
	
	//document.getElementById("ball").style.top=ball.x+"px";
	document.getElementById("ball").style.right=ball.x+"px";
	},300);

 
}


function move(event) {
	"use strict";
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
						if(y<=210){
						y+=10;
						}
						 
					}
					
					return y;
					}
        };

    chrId.style.top = (chr.updown()) + "px";
   
}

document.addEventListener('keydown', move);
