var score = 0, highScore=0, highScoreText=0;
var cactus = 0,x = 0,catusHeight=0;
var dino = 0,ydino=0;
var space = false;

$(document).ready(function(){
	"use strict";
	if(highScore===0){highScoreText="";}else{highScoreText="Highscore: "+ highScore;}
	if(score>=6){
			highScore=score;
			}
	x=$(".block").position(); 
	/**x.top=Math.floor(x.top);*/
	$(".highScoreText").append("Score: "+ score);
	$(".highScoreText").append("<br/>"+" top: "+ x.top +" left: "+x.left);
	$(".highScoreText").append("<br/>"+"catusHeight: "+ catusHeight);
	//** $(document).keyup(function(evt) {
	//**    if (evt.keyCode == 32) {
	//**      space = false;
	//**    }
	 //** }).keydown(function(evt) {
	 //**   if (evt.keyCode == 32) {
	//**      space = true;
	//**    }
	//**  });
	//**}
	if(space===false){catusHeight=0;}
	if(score>highScore){highScore=score;}

	$(".highScoreText").empty();
	$(".highScoreText").append("Score: "+ score);
	$(".highScoreText").append(" Highscore: "+ highScore);

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
			catusHeight+=10;
			$(".block").css("bottom", catusHeight);
		}								
	}
}).keyup(function(key){
	"use strict";

	if (key.keyCode === 32) {
		 space = false;
		 /**$( ".block" ).animate({ "top": "+=30px" }, "slow" );*/
		 $(".block").css("background-color", "blue");
		  catusHeight=0;
	}
			
});
