<?php include ("php/header.php");
printHead("Galerie");
?>
<div class="topheight" id="top"></div>
<div id="navi" class="fixedtop"><span id="menu"></span></div>
<script src="js/myfirstplugin.js"></script>
<script type="text/javascript" src="js/galerie.js"></script>
<h1>Galerie</h1>
<script>
$(document).ready(function() {
	"use strict";
	$(".greencolor").greenify();
	
});
</script>
<div class="greencolor">Hello</div>

<img src="image/image_1_small.jpg" alt="Licht" />
<div class="fixedbottom"> <a href="#top">Zum Seiten-Anfang</a> </div>
<div class="boxblue">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
</body>

</html>