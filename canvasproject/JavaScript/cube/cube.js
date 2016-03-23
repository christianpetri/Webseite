/*global THREE*/


var material, geometry, x=0;
$(document).ready(function( ) {
    

"use strict";
var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
			camera.position.x = 3;
			camera.position.y = 2;
			camera.position.z = 3;
			window.addEventListener( 'resize', onWindowResize, false );	 
			
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			//add cube
			geometry = new THREE.BoxGeometry( 2, 2, 2 );
			material = new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.SmoothShading } );
			var cube = new THREE.Mesh( geometry, material );
			//scene.add( cube );
	
			//add cube1
			geometry = new THREE.BoxGeometry( 2, 2, 2 );
			material = new THREE.MeshLambertMaterial( { color: 0xffffff, transparent: true, opacity: 0.9 } );
			var cube1 = new THREE.Mesh( geometry, material );
			//cube1.position.x=2;
			//cube1.position.y=2;
			scene.add( cube1 );
			
			//add cube2
			geometry = new THREE.BoxGeometry( 0.5, 0.5,0.5);
			material = new THREE.MeshLambertMaterial( { color: 0xffffff, transparent: true, opacity: 1} );
			var cube2 = new THREE.Mesh( geometry, material );
			//cube2.position.x=-2;
			//cube2.position.y=-2;
			scene.add( cube2 );
			
			 
			//add spot light yellow
			var spotLight2 = new THREE.PointLight(   0xffffff, 1, 1 );
			spotLight2.position.set( 0, 5, 0 );
			 
			spotLight2.shadowDarkness = -1;
			scene.add( spotLight2 );
			 
			
			//scene.add   Light grey
			var light = new THREE.PointLight( 0xffffff, 0.5, 50 );
			light.position.set( 0, 2, 3 );
			scene.add( light );
			
			
			//LightBulb red
				var bulbGeometry1 = new THREE.SphereGeometry( 0.2, 16, 8 );
				var light1 = new THREE.PointLight( "rgb(255,0,0)", 1, 100, 1);
					var	bulbMat1 = new THREE.MeshStandardMaterial( {
						emissive: "rgb(255,0,0)",
						emissiveIntensity: 1,
						color: "rgb(255,0,0)"
					});
				light1.add( new THREE.Mesh( bulbGeometry1, bulbMat1 ) );
				light1.position.set( 0, 2, 0 );
				light1.castShadow = true;
				scene.add( light1 );
			 //Light Bulb red end
			 
			 //LightBulb white
				var bulbGeometry = new THREE.SphereGeometry( 0.2, 16, 8 );
				var  bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 1 );
					var	bulbMat = new THREE.MeshStandardMaterial( {
						emissive: 0xffffee,
						emissiveIntensity: 1,
						color: 0x000000
					});
				bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
				bulbLight.position.set( 0, 2, 0 );
				bulbLight.castShadow = true;
				scene.add( bulbLight );
			 
			 //Light Bulb white end
			 
			//Add ambient Light
				var lighta = new THREE.AmbientLight( 0x404040 ); // soft white light
				scene.add( lighta );
			//end
				 


			var controls = new THREE.OrbitControls(camera, renderer.domElement);

			var render = function () {
				requestAnimationFrame( render );

				cube.rotation.x +=0.01;
				 cube.rotation.y  = 1;
				light1.position.set( Math.sin((x*180/Math.PI)/3)*3, Math.cos((x*180/Math.PI)/3)*3,0 ); 
				bulbLight.position.set( Math.sin(x*180/Math.PI)*3, 0, Math.cos(x*180/Math.PI)*3); 
			  
				x+=0.0005;
				if(x>400){x=0;}
				renderer.render(scene, camera);
				controls.update();
				
				
				
			};

			render();
			
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			
			
});