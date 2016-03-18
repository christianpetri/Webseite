<?php
session_start();
 ?>
 <!doctype html> 
 <html lang="de">
 <head>
 <title>Abmelden</title>
 <style>
 body{
margin:auto;
width:100%;
max-width:500px;	 
	 
}
 </style>
 </head>
 <body>
 <?php
// remove all session variables
session_unset(); 

// destroy the session 
session_destroy(); 

echo "Abgemeldet!!";
echo '<form action="index.php"><input type="submit" value="Zur&uuml;ck zur Hauptseite"/></form>';
?>
</body>
</html>