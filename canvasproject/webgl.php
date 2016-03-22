<?php include ("header/headercanvas.php");
 printHeaderCanvas(); 
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<style>
			body {
				background-color: white;
				margin: 0;
				overflow: hidden;
			}
		</style>
	</head>
	<body>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
		<script src="http://brangerbriz.net/labs/threejs_playGnd/js/three.min.js"></script>
		<script src="http://brangerbriz.net/labs/threejs_playGnd/js/Detector.js"></script>
		<script>

			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 50, W/H, 50, 10000 );
				camera.position.z = 500;
				camera.position.x = 0;
				camera.position.y = 500;
				
				scene = new THREE.Scene();
				
				
				// paste your code from the geometryGUI here
			
				 
				
				//sphere
				geometry = new THREE.SphereGeometry(117.47, 10, 10);
				material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading});
				mesh = new THREE.Mesh(geometry, material);
				mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.48;
				mesh.position.y =200;
				scene.add(mesh);
				
				  

			}

			function draw() {

				requestAnimationFrame( draw );
				
				// experiment with code from the snippets menu here
				camera.lookAt(mesh.position);
				
				$(document).mousemove(function(event){
   					 $mouseX=event.pageX
					 $mouseY=event.pageY
				});
				 mesh.rotation.x = $mouseY/300+150;	
				 mesh.rotation.y = $mouseX/500;	
				 
				renderer.render( scene, camera );

			}

			setup();
			draw();

		</script>
		
	</body>
</html>