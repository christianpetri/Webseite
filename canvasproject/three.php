<?php include ("header/headercanvas.php");
 printHeaderCanvas(); 
?>
<!DOCTYPE html>
<html>
	<head>
    	<meta charset= "utf-8">
		<title>My first Three.js app</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script type="text/javascript" src="JavaScript/three.min.js"></script>
        <script type="text/javascript" src="JavaScript/threepage.js"></script>
        <script src="JavaScript/OrbitControls.js"></script>
        <script type="text/javascript" src="../canvasproject/JavaScript/common.js"></script>
		<style>
		body{margin: 0  }
		</style>
		
	</head>
	<body onLoad="canvas()">
    <canvas style="position:absolute; top:10px; left:10px;" id="drawing1" width="400px" height="400px"></canvas>
		 
		  
	</body>
</html>