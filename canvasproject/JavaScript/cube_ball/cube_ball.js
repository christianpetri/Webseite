/* global THREE*/ 
var  mouseX, mouseY = 0;
var geometry, material; 
var t=0;
// convert vertical fov to radians



$(document).ready(function(){
"use strict";	


	//get the cursor position and set its coordinates to the (0,0) to the center of the page
	$(document).mousemove(function (event){
	
		mouseX=event.pageX-$(document).width()/2;
		mouseY=(event.pageY-$(document).height()/2)*-1; 
		$(".mouseCoordinates").html("<p> mouseX: "+mouseX+" "+" mouseY: "+mouseY*-1+"width= "+"</p>");
	});	
	
	//THREE.js start
	function renderCanvas(){
		
		
		
		
		    var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
			
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			 //update window on resize
			 window.addEventListener('resize', function() {
			  var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
			  renderer.setSize(WIDTH, HEIGHT);
			  camera.aspect = WIDTH / HEIGHT;
			  camera.updateProjectionMatrix();
			 });
	
			//add cube to scene
			geometry = new THREE.BoxGeometry( 5, 5, 5 );
			material = new THREE.MeshNormalMaterial( { shading: THREE.FlatShading } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
			
			//add cube1 to scene
			geometry = new THREE.BoxGeometry( 1, 1, 1 );
			material = new THREE.MeshNormalMaterial( { shading: THREE.FlatShading } );
			var cube1 = new THREE.Mesh( geometry, material );
			scene.add( cube1 );

			//add lines
			material = new THREE.LineBasicMaterial({
					color: "rgb(255,255,255)"
				});
				
				geometry = new THREE.Geometry();
				geometry.vertices.push(					  
					new THREE.Vector3( 0, 0, 0 ),
					new THREE.Vector3( 0, 0, 0 )
				);

			var line = new THREE.Line( geometry, material );
			scene.add( line ); 

			var render = function () {
				requestAnimationFrame( render );
				
				//calulate the ratio of the "screen" vs the "3D Screen"
				var dist = 1; //distance between the camera and the plane aka the screen
				
				var vFOV = camera.fov * Math.PI / 180;        // convert vertical fov to radians
				var height = 2 * Math.tan( vFOV / 2 ) * dist; // visible height

				var aspect = window.innerWidth / window.innerHeight; //get aspect ratio
				var width = height * aspect;                         // visible width
				
				var ratioY = window.innerHeight / height;
				var ratioX = window.innerWidth / width;
				
				
				if(t>2){t=0;}
				t+=1;
				//if(t===1){mouseVector.setX((t*20));}
				//line.position.x=mouseX/10;
				line.geometry.verticesNeedUpdate = true;
				line.geometry.vertices[ 1 ].x =mouseX/ratioX;  
				line.geometry.vertices[ 1 ].y =mouseY/ratioY;  
				line.geometry.vertices[ 1 ].z =49;
				 //mouseVector = new THREE.Vector3( mouseX/10, mouseY/10, 0 );
				//cube1.position.x=mouseX/10;
				//cube1.position.y=mouseY/10;
				cube1.position.z=-49;
				
				cube.rotation.y =mouseX/1000;
				cube.rotation.x= (mouseY*-1/1000) ;
				camera.position.z=50;
				renderer.render(scene, camera);
				
				
				
			  
			
    	
			$(".mouseCoordinates").html("<p> mouseX: "+mouseX+" "+" mouseY: "+mouseY*-1+"width= "+width.toFixed(2)+" camera.fov= "+camera.fov+"</p>");
			};

			render();
	}
	renderCanvas();
	//THREE.js end
	

	
	
});