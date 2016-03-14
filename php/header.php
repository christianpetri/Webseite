
	
<?php 
function printHead($title){
?>

<!DOCTYPE Html>
<html>
<head>
<title><?php print $title;?></title>
<link href="css/style.css" type="text/css" rel="stylesheet"/>
<link rel="stylesheet" type="text/css" href="css/animate.css">
<link rel="stylesheet" type="text/css" href="css/tipso.css">
<script type="text/javascript" src="js/jquery.js"></script>
<script src="js/tipso.js"></script>
<script src="js/jquery.nicescroll.js"></script>
<script type="text/javascript" src="js/js.js"></script>
<script src="/js/myfirstplugin.js"></script>
<script src="/js/jump-multi.js"></script>
<meta charset="UTF-8" />
</head>

<body>
<div class="topheight" id="top"></div>
<div class="fixedtop" id="navi"><span id="menu">
<a href="index.php">Home</a>
<a href="galerie.php">Galerie</a>
<a href="jump.php">Jump</a>
<a href="purejavascript.php">Pure JavaScript</a></span></div>

<div class="fixedbottom"><a href="#top">Zum Seiten-Anfang</a></div>

<?php
}
?>