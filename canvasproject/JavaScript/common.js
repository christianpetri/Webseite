$(document).ready(function(){
	"use strict";



function draw(){
	


var u=1; //change rotation direction and speed  
//eg "-1,-0,5,0.5,1, 120"
var r=180; //size of the cube TRY 50,100

//change size
 $(".numberr").html(r);
$(".button").click(function(){
	r=$(".inputr").val();
	$(".numberr").html(r);
});		


//advanced
//frameRate(50);//set revolving speed 0=fastest 1=slowest 2=FASTER 3=EVEN faster and so on TRY 15
//
var n=10,a=0,t=0;
var x=200, y=200,z=0;
var x1=200,y1=200,z1=0;
var x2=200,y2=200,z2=0;
var x3=200,y3=200,z3=0;


var xi=x,zi=z;

var p,q;
var p1,q1;
var p2,q2;
var p3,q3;
function sin($sin){
	return Math.sin($sin* Math.PI / 180.0);
}
function cos($cos){
	return Math.cos($cos* Math.PI / 180.0); 
}
function line($x1,$y1,$x2,$y2){
	 ctx.beginPath();
	 ctx.moveTo($x1, $y1);
	 ctx.lineTo($x2, $y2);
	 ctx.strokeStyle = 'white';
	 ctx.stroke();
}
function rect($x,$y,$h,$w){
	ctx.beginPath();
    ctx.rect($x, $y, $h, $w);
	ctx.fillStyle="rgba( 0 , 0, 0,0.05)";
    ctx.fill();
}
function stroke($r,$g,$b){
	ctx.strokeStyle = ($r,$g,$b);
	ctx.stroke();
}
function ellipse($x,$y,$w,$h){
	$h=$w;
	ctx.beginPath();
	ctx.arc($x,$y, $w/10, 0, 2*Math.PI);
	 ctx.strokeStyle = 'white';
	ctx.stroke();
}
/*
function fill($r,$g,$b,$a){
	ctx.fillStyle ="rgba("+$r+","+$g+","+$b+","+$a+")";
	ctx.fill();
}
*/
	var c = document.getElementById("drawing1");
	var ctx = c.getContext("2d");
	
	

setInterval(function() {
	

	
 stroke(255, 255, 255);

    a+=u;
    x	= 	sin(a + 0 	  	)*r+xi; 	z	=	cos(a + 0 	)*r+zi;
    x1	=	sin(a + 90		)*r+xi;		z1	=	cos(a + 90	)*r+zi;
   	x2	=	sin(a + 180		)*r+xi;		z2	=	cos(a + 180	)*r+zi;
    x3	=	sin(a + 270		)*r+xi;		z3	=	cos(a + 270	)*r+zi;

p=	x+z/n; 
q=	(400-y)-(z/n);

p1=	x1+z1/n; 
q1=	(400-y1)-(z1/n);

p2=	x2+z2/n; 
q2=	(400-y2)-(z2/n);

p3=	x3+z3/n; 
q3=	(400-y3)-(z3/n);
    
   //ellipse(xi	,r		,10,10);
	//ellipse(xi	,400-r	,10,10);
	ellipse(p	,q		,10,10);
	ellipse(p1	,q1		,10,10);
	ellipse(p2	,q2		,10,10);
	ellipse(p3	,q3		,10,10);
      
    line(xi,	200-r	,p	,q);
    line(xi,	200-r	,p1	,q1);
    line(xi,	200-r	,p2	,q2);
    line(xi,	200-r	,p3	,q3);
    
    line(xi,200+r,p,q);
    line(xi,200+r,p1,q1);
    line(xi,200+r,p2,q2);
    line(xi,200+r,p3,q3);
    
    line(p,q,p1,q1);
    line(p1,q1,p2,q2);
    line(p2,q2,p3,q3);
    line(p3,q3,p,q);
   
    t+=1;
    if(t>1){
		 
		rect(-10, -10, 450, 450);
		
		rect(-10, -10, 450, 450);
		rect(-10, -10, 450, 450);
		rect(-10, -10, 450, 450);
		
		rect(-10, -10, 450, 450);
		rect(-10, -10, 450, 450);
		/*
		rect(-10, -10, 450, 450);
		rect(-10, -10, 450, 450);
		
		
		 */
		t=0;
 	}
	if(a>3610){a=0;}
	
	
 }, 30);
} 
 draw();
 /*
 	//change size
 $(".numberr").html(r);
$(".button").click(function(){
	r=$(".inputr").val();
	$(".numberr").html(r);
});	
 */
	
	
});