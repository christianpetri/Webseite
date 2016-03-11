

//define all the Global Vars

var score = 0, highScore=0;
var x = 0, dinoHeight=0, dinoUpDown=1;
var cactus0 = 0, cactusPosition0  =-50;
var cactus1 = 0, cactusPosition1  =-50;
var cactus2 = 0, cactusPosition2  =-50; 
var spacebar = false;
var t = 0; 
var startGame = false;
var stopGame=false;
var speed=1;
var smallCubeClass=0;
var smallCubeClassTimer=0;
var makeDinoExplode=false;
var dinoWalk=0;
$(document).keydown(function(key) {
	"use strict";	
		
		
						if (key.keyCode === 32) {
							startGame=true;
							spacebar=1;
							makeDinoExplode=false;										
						}
						
				});
//Game start

$(document).ready(function(){
	
	"use strict";
	//$(".block").append('<img src="image/dino_Start.png" width="44" height="47"/>');	
	document.onselectstart = function(){return false;};
    document.ondragstart = function(){return false;};

		$(this).click(function(){
				makeDinoExplode=false;
				spacebar=1;
				startGame=true;
		
			});
		$(this).on({ 'touchstart' : function(){ 
				makeDinoExplode=false;
			    spacebar=1;
				startGame=true;
				
					
				} 
		});
		setInterval(function(){
			
				 
	
				
		if(startGame){ 	
				
				dinoMove();
				$(".block").show();
				displayScoreText();
						
				//make game more difficult
				 speed+= 0.0001;
				
				//*count up score*/
				score+=0.01;
				
				//*define position of cactus and dino*/
				getPositon();
				
				//*if block reaches left wall=reset to right wall*/
				moveAndResetPosition();
				
				//*Make dino Jump if spacbar is pressed (Timeout for Spacebar)*/
				dinoJump();
				
				
				//** If catus and dino are in the same place aka Dino touches cactus = End of Game/Dino dead*/
				dinoKill();
				
				
		
			
		} 
		if(makeDinoExplode){
			explodeDino();
			showExplosion();	  	 
		} else {
			
			hideExplosion(); 
		}
			
	}, 10 );
   
});

function dinoMove(){
	"use strict";
				dinoWalk+=1;
				if(dinoWalk>30){dinoWalk=0;}
				if(dinoWalk===0){
				//$(".block").empty();
				//$(".block").append('<img src="image/dinoWalk1.png" width="44" height="47"/>');
				}
				if(dinoWalk===15){
				//$(".block").empty();
				//$(".block").append('<img src="image/dinoWalk2.png" width="44" height="47"/>');
				}
				
				
	}
 

function displayScoreText(){
	"use strict";
	/**display text in the upper right corner*/
	$(".VarValue").empty();
	if(score>highScore){highScore=Math.floor(score);}
	
	$(".scoreText").empty();
	$(".scoreText").append("Score: "+ Math.floor(score) );
	$(".highScoreText").empty();
	$(".highScoreText").append("Highscore: "+ highScore);  
	
}


function dinoJump(){
	"use strict";
	if(spacebar===1){
		 t+=1;
		if(t>100){t=0;spacebar=0;dinoHeight=0;} 
		if(dinoHeight===0){dinoUpDown=1;}
		if(dinoHeight===50){dinoUpDown=-1;}
		dinoHeight+=dinoUpDown;
		
		
		
		$(".block").css("bottom", dinoHeight);
										 
	}
}
function dinoKill(){
	"use strict";
		if(dinoHeight<10){ 
					if(cactus0.left<30&&cactus0.left>15){stopGame=true;}
					if(cactus1.left<30&&cactus1.left>15){stopGame=true;}
					if(cactus2.left<30&&cactus2.left>15){stopGame=true;}
					
								
		}
		if(stopGame){  
					makeDinoExplode=true;
					endOfGame();
					stopGame=false;
					startGame=false;
					
					 
				}
		
		
}
 
function getPositon(){
	"use strict";
		/**get the position of the block "top,left"*/
				x=$(".block").position(); 
				x.top=Math.floor(x.top);
				
				/**get the position of the cactus0"x,y"*/
				cactus0=$(".blockcactus0").position(); 
				cactus1=$(".blockcactus1").position();
				cactus2=$(".blockcactus2").position();
}
function moveAndResetPosition(){
	"use strict";
		/**move catus from right to left count up*/ 
				if(Math.abs(cactusPosition0-cactusPosition2 )>=0 )	{cactusPosition0 	+=speed; }
				if(Math.abs(cactusPosition0-cactusPosition1 )>170)	{cactusPosition1	+=speed; }
				if(Math.abs(cactusPosition1-cactusPosition2)>170)	{cactusPosition2	+=speed; }
		/**if cactus0is of the far left, reset is to right position*/
				if((cactusPosition0) > 520){cactusPosition0 = -1*(Math.floor((Math.random()*8+1))*10+20);}
				if((cactusPosition1) > 520){cactusPosition1 = -1*(Math.floor((Math.random()*8+1))*10+20);}
				if((cactusPosition2) > 520){cactusPosition2 = -1*(Math.floor((Math.random()*8+1))*10+20);}
		/**Place catus and create the movement*/
				$(".blockcactus0").css("right", cactusPosition0	);  
				$(".blockcactus1").css("right", cactusPosition1	);  
				$(".blockcactus2").css("right", cactusPosition2	);
}
function endOfGame(){
	"use strict"; 
	
	$(".block").hide();
	
	$(".scoreText").empty();
	$(".scoreText").append("Score: "+ Math.floor(score) );
	score=0;
	$(".highScoreText").empty();
	$(".highScoreText").append("Highscore: "+ highScore); 
	$(".VarValue").empty();
	$(".VarValue").append("<center>"+"Click or press Spacebar to start again"+"</center>"); 
	
	cactusPosition0  =-50;
	cactusPosition1  =-50;
	cactusPosition2  =-50;
	$(".blockcactus0").css("right", cactusPosition0	);  
	$(".blockcactus1").css("right", cactusPosition1	);  
	$(".blockcactus2").css("right", cactusPosition2	);
	cactus0=$(".blockcactus0").position(); 
	cactus1=$(".blockcactus1").position();
	cactus2=$(".blockcactus2").position();
	
	
	speed=1;
}

function explodeDino(){
	"use strict"; 
	var randomNumberColor=Math.floor(Math.random()*255);
	smallCubeClassTimer+=1;
				 
	
	
	smallCubeClass=".smallCube"+smallCubeClassTimer;
				
	var color="rgba("+255+","+0+","+randomNumberColor+","+1+")";
				 
	$(smallCubeClass).css("background-color",color);
		$(smallCubeClass).animate({
							left: "+="+(Math.floor(Math.random()*1000)-500),
							top: "-="+(Math.floor(Math.random()*300))
						  
		}, 500);
		if(smallCubeClassTimer>100){
			for(var i=0;i<100;i++){
		 		var genrateSmallCubeClass=".smallCube"+[i];
				$(genrateSmallCubeClass).css({	
												"position":"absolute",
												"left":"0px",
												"top" : "0px"										 
				});
			}
			smallCubeClassTimer=0;
	}
				 
}


$(document).ready(function(){
	"use strict"; 
//generate 100 div with class .smallCube[i] (with height 10px widht 10px, positon absolute and top 0px)
	for(var i=0;i<100;i++){
		
		var genrateSmallCubeClass=".smallCube"+[i];
		$(".explode").append('<div class="smallCube'+[i]+'" position="absolute" top="0px">'+'</div>');
		$(genrateSmallCubeClass).css({	
					"position":"absolute",
					"left":"0px",	
					"width":"10px",
					"height":"10px",
					"border-radius":"10px"
					 
				}
		);		
						
	}

});

function showExplosion(){
	"use strict"; 
	for(var a=0;a<100;a++){
						 
								var genrateSmallCubeClass=".smallCube"+[a];
									$(genrateSmallCubeClass).show();
						 
				}
}
function hideExplosion(){
	"use strict"; 
	for(var i=0;i<100;i++){
						 
								var genrateSmallCubeClass=".smallCube"+[i];
									$(genrateSmallCubeClass).hide();
						 
				}
	
	}
	
/**.container {
  position: relative;
}
#clip {
  position: absolute;
  clip: rect(0, 100px, 200px, 0);
  /* clip: shape(top, right, bottom, left); NB 'rect' is the only available option  
  
  } */
