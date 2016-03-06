var score = 0, highScore=0, highScoreText=0;
var cactus = 0,x = 0;
var dino = 0,ydino=0;
var space = false;

$(document).ready(function(){
	"use strict";
if(highScore===0){highScoreText="";}else{highScoreText="Highscore: "+ highScore;}
if(score>=6){
		highScore=score;
		highScore=true;
}
$(".highScoreText").append("Score: "+ score);

$(document).keydown(function(key) {
		
			if (key.keyCode === 32) {
				 space = true;
				 $( ".block" ).animate({ "top": "-=30px" }, "slow" );
			}
						
			if(space===true){score+=1;
			}
$(".highScoreText").empty();
$(".highScoreText").append("Score: "+ score);

						
});
$(document).keyup(function(key) {	

			var space = false;
			if (key.keyCode === 32) {
				 space = false;
				 $( ".block" ).animate({ "top": "+=30px" }, "slow" );
			}
			
});
			

});
	
	