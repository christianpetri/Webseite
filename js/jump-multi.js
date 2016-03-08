var score = 0, highScore=0;
var x = 0,dinoHeight=0,dinoUpDown=1;
var cactus  = 0, cactusPosition  =-20;
var cactus1 = 0, cactusPosition1 =-20;
var cactus2 = 0, cactusPosition2 =-20; 
var space = false;
var spacebar = 0;
var t = 0; 
var start = 0;
var stop=false;
var speed=1;

$(document).ready(function(){
	"use strict";
	setInterval(function(){
		if(start){ 	
				/**display text in the upper right corner*/
			
				$(".VarValue").empty();
				if(score>highScore){highScore=Math.floor(score);}
				$(".scoreText").empty();
				$(".scoreText").append("Score: "+ Math.floor(score) );
				$(".highScoreText").empty();
				$(".highScoreText").append("Highscore: "+ highScore);  
				
				//make game more difficult
				 speed+= 0.0001;
				
				//*count up /score*/
				score+=0.01;
				/**get the position of the block "x,y"*/
				x=$(".block").position(); 
				x.top=Math.floor(x.top);
				
				/**get the position of the cactus "x,y"*/
				cactus=$(".blockcactus").position(); 
				cactus1=$(".blockcactus1").position();
				cactus2=$(".blockcactus2").position();
				/**move catus from right to left count up*/ 
				if(Math.abs(cactusPosition-cactusPosition2 )>=0 )	{cactusPosition 	+=speed; }
				if(Math.abs(cactusPosition-cactusPosition1 )>170)	{cactusPosition1	+=speed; }
				if(Math.abs(cactusPosition1-cactusPosition2)>170)	{cactusPosition2	+=speed; }
				//$(".VarValue").append("     "+ cactusPosition +"     "+ cactusPosition2 );
				/**Place catus and create the movement*/
				$(".blockcactus").css("right", 	cactusPosition	);  
				$(".blockcactus1").css("right", cactusPosition1	);  
				$(".blockcactus2").css("right", cactusPosition2	);  
				
				/**if cactus is of the far left, reset is to right position*/
				if(cactusPosition    > 520){cactusPosition  = -1*(Math.floor((Math.random()*8+1))*10+20);}
				if((cactusPosition1) > 520){cactusPosition1 = -1*(Math.floor((Math.random()*8+1))*10+20);}
				if((cactusPosition2) > 520){cactusPosition2 = -1*(Math.floor((Math.random()*8+1))*10+20);}
				if(spacebar===1){
					t+=1;
					if(dinoHeight===0||dinoHeight<0){dinoUpDown=1;}
					if(dinoHeight===39||dinoHeight>40){dinoUpDown=-1;}
					dinoHeight+=dinoUpDown;
					
					if(t>77 ){t=0;spacebar=0;dinoHeight=0;} 
					
					$(".block").css("bottom", dinoHeight);
										 
				}
				//** If catus and dino are in the same place, end game*/
				if(dinoHeight<10){ 
					if(cactus .left<25&&cactus .left>15){stop=true;}
					if(cactus1.left<25&&cactus1.left>15){stop=true;}
					if(cactus2.left<25&&cactus2.left>15){stop=true;}			
				}
				if(stop){  
							start=false; 
							$(".block").css("background-color", "tomato");
						  	$(".highScoreText").empty();
							$(".scoreText").empty();
							$(".scoreText").append("Score: "+ Math.floor(score) );
							score=0;
							$(".highScoreText").append("Highscore: "+ highScore); 
							$(".VarValue").empty();
							$(".VarValue").append("Press Spacebar to start again"); 
							cactusPosition   =-20;
							cactusPosition1  =-20;
							cactusPosition2  =-20;
							speed=1;
							stop=false;
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
		 
		
													
	}
}).keyup(function(key){
	"use strict";

	if (key.keyCode === 32) {
		 	space = false;
			$(".block").css("background-color", "blue");
		  start=true;
	}
			
});
