var score = 0, highScore=0, highScoreText=0;
var cactus = 0,x = 0,catusHeight=0,cactusupdown=1;
var dino = 0,ydino=0;
var space = false;



$(document).ready(function(){
	"use strict";
	setInterval(function(){
			$(".highScoreText").empty();
			if(score>highScore){highScore=score;}
			$(".highScoreText").append("Score: "+ score);
			$(".highScoreText").append(" Highscore: "+ highScore);  
			$(".highScoreText").append("<br/>"+"catusHeight: "+ catusHeight);
			x=$(".block").position(); 
			x.top=Math.floor(x.top);
			$(".highScoreText").append("<br/>"+" top: "+ x.top +" left: "+x.left);
			cactus=$(".block").position(); 
			 
			$(".highScoreText").append("<br/>"+"catus.top: "+ cactus.top);
			if(catusHeight===39||catusHeight>40){cactusupdown=-1;}
			if(catusHeight===0||catusHeight<0){cactusupdown=1;}
			catusHeight+=cactusupdown;
			ydino+=1;
			if(ydino>500){ydino=0;}
			$(".block").css("bottom", catusHeight);
			$(".blockcactus").css("right", ydino);
	}, 20);
		

			 
		
		
		
		
		
	
		
	
		x=$(".block").position(); 
		/**x.top=Math.floor(x.top);*/
		$(".highScoreText").append("<br/>"+" top: "+ x.top +" left: "+x.left);
		$(".highScoreText").append("<br/>"+"catusHeight: "+ catusHeight);
		
		
 
});
$(document).keydown(function(key) {
			
	"use strict";	
	if (key.keyCode === 32) {
		space = true;
		/**$( ".block" ).animate({ "top": "-=30px" }, "slow" );*/
		$(".block").css("background-color", "yellow"); 
		catusHeight+=10;
		$(".highScoreText").empty();
		$(".highScoreText").append("Score: "+ score);
		if(space===true){
			score+=1;
			
		}
										
	}
}).keyup(function(key){
	"use strict";

	if (key.keyCode === 32) {
		 space = false;
		 /**$( ".block" ).animate({ "top": "+=30px" }, "slow" );*/
		 $(".block").css("background-color", "blue");
		  
	}
			
});
