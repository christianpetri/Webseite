// JavaScript Document

function game(){
	"use strict";
	var ball={x:150,y:350};
	var dir={x:1,y:1};
	var barLeft={x1:1,x2:1};
	var barRight={x1:1,x2:1};
	var restartGame=false;

	document.getElementById("moveupdown").style.top=10+"px";
	document.getElementById("moveupdown").style.height=100+"px";
	document.getElementById("computer").style.top=10+"px";
	document.getElementById("computer").style.height=100+"px";

	setInterval(function(){
		//if ball touches upper or lower limit change direction
		if(ball.x<=0){dir.x=1;}
		if(ball.x>=290){dir.x=-1;}
		//if ball touches the left or right boundery, restart game
		if(ball.y<=0){restartGame=true;}
		if(ball.y>=690){restartGame=true;}	
		//after restart=true, reset ball to center and give it a random start direction
		if(restartGame){
			ball={x:150,y:350};
			dir.y=(-1 + Math.round(Math.random()) * 2);
			restartGame=false;
		}
		//make ball move
		ball.x+=10*dir.x;
		ball.y+=10*dir.y;
		document.getElementById("ball").style.top=ball.x+"px";
		document.getElementById("ball").style.left=ball.y+"px";
		//make computer move
		if(ball.y>300){
		document.getElementById("computer").style.top=ball.x+"px";
		}
		
		//get left and right bars positon to be able to create if statments
		barLeft.x1=parseInt(document.getElementById("moveupdown").style.top);
		barLeft.x2=		parseInt(document.getElementById("moveupdown").style.top)+
						parseInt(document.getElementById("moveupdown").style.height);
					
		barRight.x1=parseInt(document.getElementById("computer").style.top);
		barRight.x2=		parseInt(document.getElementById("computer").style.top)+
					parseInt(document.getElementById("computer").style.height);
		//if the ball=my bar position, game on
		if(barLeft.x1<=ball.x && barLeft.x2>=ball.x&&ball.y===30){
			dir.y=1;
		}
		//if the ball=the computer bar, game on
		if(barRight.x1<=ball.x && barRight.x2>=ball.x&&ball.y===660){
			dir.y=-1;
		}
		//parseInt(a, 10)
		console.log(barRight);
		console.log(ball);
		
		
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
