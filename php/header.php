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
<div class="fixedbottom"><a href="#top">Zum Seiten-Anfang</a></div>

<?php
}
?>
<?php 
function printNavigation($write_fixedtopnav_or_fixedbottomnav){
?>
    <div id="navi" class="<?php print $write_fixedtopnav_or_fixedbottomnav; ?>">
        <span id="menu">
            <a href="index.php">Home</a>
            <a href="galerie.php">Galerie</a>
            <a href="jump.php">Jump</a>
            <a href="purejavascript.php">Pong</a>
            <a href="canvasproject/index.html">Canvas</a>
        </span>
    </div>
<?php
}
?>
<?php
function kontakt(){
?>
	
		<form method='post' action='empfangen.php'>
        <table>
            <tr>
                <td><input class="nachricht" name="fname" placeholder="Vorname" type="text" required/></td>
                <td> <input class="nachricht" name="lname" placeholder="Nachname" type="text" required/> </td>
                 
            </tr>
             </table>
             <table>
            <tr>
            	 <td  ><input class="email" name="email" placeholder="E-Mail" type="email" required/></td> 
         	</tr>   
         	<tr>
        		<td > <textarea class="nachricht" placeholder="Ihre Nachricht" name="nachricht" type="text" required></textarea> </td>
       		 </tr>
        	<tr>
				<td><input   type="Submit" value="Versenden"/></td>
        	</tr>
        </table>
		</form>
        
	
<?php	 	
}
?>

