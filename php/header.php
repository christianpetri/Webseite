<?php 
function printHead($title){
?>
<!DOCTYPE Html>
<html>
<head>
<title><?php print $title;?></title>
<link rel="stylesheet" type="text/css" href="css/animate.css">
<link rel="stylesheet" type="text/css" href="css/tipso.css">
<link href="css/style.css" type="text/css" rel="stylesheet"/>
<script type="text/javascript" src="js/jquery.js"></script>
<script src="js/tipso.js"></script>
<script src="js/jquery.nicescroll.js"></script>
<script type="text/javascript" src="js/js.js"></script>
<script src="/js/myfirstplugin.js"></script>

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
            <a href="canvasproject/">canvasprojects</a> 
            
            <?php 
			
				if(isset($_SESSION["fname"])){echo '<a href="userlogout.php">Abmelden</a>';
				}else{
					echo '<a href="user.php">Anmelden</a>';
				}
		
			?>
             
        </span>
    </div>
<?php
}
?>

 

<?php
function getComments(){

//access database

$servername = "mysql.kontakt.christianpetri.ch";
$username = "kontaktchristian";
$password = "!Asperger!6815";
$dbname = "kontaktchristianpetri";


//check if table exists
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
 if ($conn->connect_errno) {
	  die('Connect Error: ' . $conn->connect_errno);
}
//get data from database
$sql = "SELECT fname, nachricht, datetime FROM kontaktformularhome";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc()) {
         echo "<br/><b>".  $row["fname"]. "</b> hat den Kommentar: <b>". $row["nachricht"]."</b> geschrieben um/am ".$row["datetime"];
     }
} else {
     echo "0 results";
}

$conn->close();
}
?>
<?php
function footer(){print "</body></html>";}
?>
