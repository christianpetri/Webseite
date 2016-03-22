 /* global THREE */ 
 var mouseX,mouseY;
 	$(document).mousemove(function(event){
		"use strict";
   					 mouseX = event.pageX;
					 mouseY = event.pageY;
				});
$(document).ready(function() {
    "use strict";

 
	function canvas(){
			
			var  geometry,material;
			
		    var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			camera.position.z = 10;
			
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
			 
			 
			//make cube
			 
			
			geometry = new THREE.OctahedronGeometry(10, 0);
			material = new THREE.MeshBasicMaterial( { wireframe: true, wireframeLinewidth: 1 } );
			var cube1 = new THREE.Mesh( geometry, material );
			cube1.scale.x = cube1.scale.y = cube1.scale.z = 0.60;
			cube1.rotation.x =0.1;
			//cube1.rotation.z =0;
			//cube1.rotation.y = 0.79;
			scene.add( cube1 );
			 
/*
			geometry = new THREE.BoxGeometry( 10, 10, 10 );
			material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading});
			var sphere1 = new THREE.Mesh(geometry, material);
			sphere1.scale.x = sphere1.scale.y = sphere1.scale.z = 0.98;
			sphere1.position.y = 0;
			sphere1.rotation.y = 0;
			scene.add(sphere1);
	*/		
			var controls = new THREE.OrbitControls(camera, renderer.domElement);
			var render = function () {
				requestAnimationFrame( render );

				 cube1.rotation.y -= 0.05;
				//cube1.rotation.y += 0.1;
				
				renderer.render(scene, camera);
				controls.update();
			};

			render();
	}
	canvas();
});