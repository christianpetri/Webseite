// JavaScript Document

function game(){
	"use strict";
	var ball={x:150,y:350};
	var dir={x:1,y:1};
	var bar={x1:1,x2:1};
	var restartGame=false;

	document.getElementById("moveupdown").style.top=10+"px";
	document.getElementById("moveupdown").style.height=100+"px";

	setInterval(function(){
		
		if(ball.x<=0){restartGame=true;}
		if(ball.x>=290){dir.x=-1;}
		if(ball.y<=0){dir.y=1;}
		if(ball.y>=690){dir.y=-1;}	
		ball.x+=10*dir.x;
		ball.y+=10*dir.y;
		
		document.getElementById("ball").style.top=ball.x+"px";
		document.getElementById("ball").style.left=ball.y+"px";
		bar.x1=parseInt(document.getElementById("moveupdown").style.top);
		bar.x2=
		parseInt(document.getElementById("moveupdown").style.top)+
		parseInt(document.getElementById("moveupdown").style.height);
		
		if(bar.x1<=ball.x && bar.x2>=ball.x&&ball.y===30){
			dir.y=1;
		}
		//parseInt(a, 10)
		console.log(bar);
		console.log(ball);
		if(restartGame){ball={x:150,y:350};}
		
	},150);

 

}

function move(event) {
	"use strict";
	 
	
	var heightBarLeft =  parseInt(document.getElementById('moveupdown').style.height);
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
						if(y<=(290-heightBarLeft)){
						y+=10;
						}
						 
					}
					
					return y;
					}
        };

    chrId.style.top = (chr.updown()) + "px";
	
	//console.log(document.getElementById('moveupdown').style.height);
	//console.log(heightBarLeft);
   
   
}

document.addEventListener('keydown', move);
