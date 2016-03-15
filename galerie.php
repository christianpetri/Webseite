<?php include ("php/header.php");
printHead("Galerie");
printNavigation("fixedtopnav");
printNavigation("fixedbottomnav");
?>
<div class="topheight" id="top"></div>

<script src="js/myfirstplugin.js"></script>
<script type="text/javascript" src="js/galerie.js"></script>
<h1>Galerie</h1>

<script>
$(document).ready(function(){
	"use strict";
	$(".greencolor").greenify();
	<?php $imageGallerie="image/image_1_small.jpg";?>
	var size=100;
	var width=<?php $size = getimagesize($imageGallerie); echo $size[0];?>;
	var height=<?php $size = getimagesize($imageGallerie); echo $size[1];?>;
	var newHeight=<?php $size = getimagesize($imageGallerie); echo $size[0];?>;
	var newWidth=<?php $size = getimagesize($imageGallerie); echo $size[1];?>;
	$(".imagearea").empty();
	$(".imagearea").append(" "+size+"%"+" height: "+newHeight+" widht: "+newWidth);
		$(document).click(function(){
			$(".imagearea").empty();
			$(".imagearea").append(" "+size+"%"+" height: "+newHeight+" widht: "+newWidth);
		});
		
		$(".bigger").click(function(){
			size+=10;
			newHeight = Math.round(((height)/100)*size);
			newWidth = Math.round(((width)/100)*size);
			$(".resize").css("height",newHeight);
			$(".resize").css("width",newWidth);
		});
	
		$(".smaller").click(function(){
			if(size>0){
				size-=10;
			}
			newHeight = Math.round(((height)/100)*size);
			newWidth = Math.round(((width)/100)*size);
			$(".resize").css("height",newHeight);
			$(".resize").css("width",newWidth);
		});
		
		$(".reset").click(function(){
			newHeight=height;
			newWidth=width;
			$(".resize").css("height",newHeight);
			$(".resize").css("width",newWidth);
			size=100;
		});
		
});

</script>

<button class="bigger">bigger</button><button class="smaller">smaller</button><button class="reset">reset</button><span class="imagearea"></span>
<br/>
<img class="resize" src="image/image_1_small.jpg" width="640" height="359" alt=""/>
<br/>

 
<div class="boxblue">
<div class="greencolor">Hello</div>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
</body>

</html>