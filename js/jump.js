var score = 0, highScore=0, highScoreText=0;
var cactus = 0,x = 0,catusHeight=0,cactusupdown=1;
var dino = 0,ydino=0;
var space = false;
var spacebar=0;
var t=0;


$(document).ready(function(){
	"use strict";
	setInterval(function(){
			$(".highScoreText").empty();
			if(score>highScore){highScore=score;}
			$(".highScoreText").append("Score: "+ score);
			$(".highScoreText").append(" Highscore: "+ highScore);  
			$(".highScoreText").append("<br/>"+"catusHeight: "+ catusHeight);
			if(true){score+=1;}else{score=0;}
			x=$(".block").position(); 
			x.top=Math.floor(x.top);
			$(".highScoreText").append("<br/>"+" top: "+ x.top +" left: "+x.left);
			cactus=$(".blockcactus").position(); 
			 
			$(".highScoreText").append("<br/>"+"catus.left: "+ cactus.left);
			
			ydino+=1; 
			if(ydino>500){ydino=0;}
			$(".blockcactus").css("right", ydino);  
			
			if(spacebar===1){
				t+=1;
				if(catusHeight===0||catusHeight<0){cactusupdown=1;}
				if(catusHeight===39||catusHeight>40){cactusupdown=-1;}
				catusHeight+=cactusupdown;
				
				if(t>77 ){t=0;spacebar=0;catusHeight=0;} 
				$(".block").css("bottom", catusHeight);
			}
			
			 
	}, 10 );

 
});
$(document).keydown(function(key) {
			
	"use strict";	
	if (key.keyCode === 32) {
		space = true;
		spacebar=1; 
		$(".block").css("background-color", "yellow"); 
													
	}
}).keyup(function(key){
	"use strict";

	if (key.keyCode === 32) {
		 	space = false;
			$(".block").css("background-color", "blue");
		  
	}
			
});
