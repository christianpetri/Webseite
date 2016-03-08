var score = 0, highScore=0;
var cactus = 0,x = 0,dinoHeight=0,dinoUpDown=1;
var cactusPosition=0;
var space = false;
var spacebar=0;
var t=0; 
var start=0;

$(document).ready(function(){
	"use strict";
	setInterval(function(){
		if(start){ 	
			 	$(".highScoreText").empty();
				if(score>highScore){highScore=Math.floor(score);}
				$(".highScoreText").append("Score: "+ Math.floor(score)+"    ");
				$(".highScoreText").append("Highscore: "+ highScore);  
				//*$(".highScoreText").append("<br/>"+"dinoHeight: "+ dinoHeight);*/
				score+=0.01;
				
				x=$(".block").position(); 
				x.top=Math.floor(x.top);
				//*$(".highScoreText").append("<br/>"+" top: "+ x.top +" left: "+x.left);*/
				cactus=$(".blockcactus").position(); 
				 
				//*$(".highScoreText").append("<br/>"+"catus.left: "+ cactus.left);*/
				
				cactusPosition+=1; 
				if(cactusPosition>520){cactusPosition=0;}
				$(".blockcactus").css("right", cactusPosition);  
				
				if(spacebar===1){
					t+=1;
					if(dinoHeight===0||dinoHeight<0){dinoUpDown=1;}
					if(dinoHeight===39||dinoHeight>40){dinoUpDown=-1;}
					dinoHeight+=dinoUpDown;
					
					if(t>77 ){t=0;spacebar=0;dinoHeight=0;} 
					$(".block").css("bottom", dinoHeight);
					 
				}
				if(dinoHeight<10){ 
						  if(cactus.left<10&&cactus.left>0){start=false; 
						  	
						  	$(".highScoreText").empty();
							$(".highScoreText").append("Score: "+ Math.floor(score)+"    ");
							$(".highScoreText").append("Highscore: "+ highScore); 
							cactusPosition+=30;
							score=0; 
						  }
				}
			 
		} 	 
	}, 10 );
	
   
});
$(document).keydown(function(key) {
			
	"use strict";	
	if (key.keyCode === 32) {
		space = true;
		start=true;
		spacebar=1; 
		$(".block").css("background-color", "yellow"); 
		
													
	}
}).keyup(function(key){
	"use strict";

	if (key.keyCode === 32) {
		 	space = false;
			$(".block").css("background-color", "blue");
		  start=true;
	}
			
});
