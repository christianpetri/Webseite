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
			var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
			
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

			//add line
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
			
			//add line1
			material = new THREE.LineBasicMaterial({ color: "rgb(255,255,255)"});
			geometry = new THREE.Geometry();
			geometry.vertices.push(					  
				new THREE.Vector3( 0, 0, 0 ),
				new THREE.Vector3( 0, 0, 0 )
			);
			var line1 = new THREE.Line( geometry, material );
			scene.add( line1 );
			
			//add line2
			material = new THREE.LineBasicMaterial({
					color: "rgb(255,255,255)"
				});
				
				geometry = new THREE.Geometry();
				geometry.vertices.push(					  
					new THREE.Vector3( 0, 0, 0 ),
					new THREE.Vector3( 0, 0, 0 )
				);

			var line2 = new THREE.Line( geometry, material );
			scene.add( line2 );
			
			//add line3
			material = new THREE.LineBasicMaterial({
					color: "rgb(255,255,255)"
				});
				
				geometry = new THREE.Geometry();
				geometry.vertices.push(					  
					new THREE.Vector3( 0, 0, 0 ),
					new THREE.Vector3( 0, 0, 0 ),
					new THREE.Vector3( 0, 0, 0 ),
					new THREE.Vector3( 0, 0, 0 )
				);

			var line3 = new THREE.Line( geometry, material );
			scene.add( line3 );
			
			//add plane
			geometry = new THREE.PlaneGeometry( 10, 10 );
			material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
			var plane = new THREE.Mesh( geometry, material );
			//scene.add( plane );
			
			//add sphere
				//add plane
			
			geometry = new THREE.SphereGeometry(0.2, 10 ,5);
			material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
			var sphere = new THREE.Mesh( geometry, material );
			//sphere.position.z=30;
			scene.add( sphere );
		 
		 

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
				
				//make vector that follows the mouse coordinates
				line.geometry.vertices[ 1 ].x =(mouseX/ratioX);  
				line.geometry.vertices[ 1 ].y =(mouseY/ratioY);  
				line.geometry.vertices[ 1 ].z =49;
				
				 
				cube1.position.z=0;
			
				camera.position.z=50;
				
				line1.geometry.verticesNeedUpdate = true;
				line2.geometry.verticesNeedUpdate = true;
				line3.geometry.verticesNeedUpdate = true;
				
				var lineA = line.geometry.vertices[ 1 ];
				var b = new THREE.Vector3(0,1,0);
				var c = new THREE.Vector3();
				c.crossVectors( lineA, b );
				line1.geometry.vertices[ 1 ]=c.setLength ( 5 );
				
				var crossLine2andd = new THREE.Vector3();
				var d = new THREE.Vector3(1,0,0);
				crossLine2andd.crossVectors(lineA,d);
				line2.geometry.vertices[ 1 ]=crossLine2andd.setLength ( 5 );
				 
				//line3.geometry.vertices[ 1 ]=c;  
				//line3.geometry.vertices[ 2 ] =crossLine2andd;  
				//line3.geometry.vertices[ 3 ] =-1*c;
				
				//http://idflood.github.io/ThreeNodes.js/index_optimized.html#example/text1.json
				//http://stackoverflow.com/questions/23033589/three-js-shape-fill-color
				//x and y for ball
				var ballZ= line.geometry.vertices[ 1 ].z/10;
				sphere.position.z= ballZ;
				var xAxis= new THREE.Vector3(1,0,0);
				var angleToZAxis = line.geometry.vertices[ 1 ].angleTo(xAxis);
				cube.rotation.y = -angleToZAxis;
				var yAxis= new THREE.Vector3(0,1,0);
				var angleToYAxis=line.geometry.vertices[ 1 ].angleTo(yAxis);
				cube.rotation.z= -angleToYAxis ;
				
				
				
				renderer.render(scene, camera);
				
				
				
			  
			
    	
			$(".mouseCoordinates").html("<p> mouseX: "+mouseX+" "+" mouseY: "+mouseY*-1+"width= "+
				width.toFixed(2)+" camera.fov= "+camera.fov+"   x="+c.x+" y="+c.y+" z="+c.z.toFixed(2) +" "+
				"line.geometry.vertices[ 1 ].z= "+line1.geometry.vertices[ 1 ].z.toFixed(2)+"</p>");
			};

			render();
	}
	renderCanvas();
	//THREE.js end
	

	
	
});