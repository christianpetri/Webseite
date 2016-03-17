<?php include ("config.php");?>
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
                <td><input style="width:200px;max-width:200px;" class="nachricht" name="fname" placeholder="Vorname" type="text" required/></td>
                <td><input style="width:200px;max-width:200px;" class="nachricht" name="lname" placeholder="Nachname" type="text" required/> </td>
                 
            </tr>
             </table>
             <table>
            <tr>
            	 <td  ><input style="width:409px;" name="website" placeholder="Ihre Webseite" type="url"/></td> 
         	</tr>   
         	<tr>
        		<td > <textarea style="width:408px; min-height:150px;"  placeholder="Ihr Kommentar" name="nachricht" type="text" required></textarea> </td>
       		 </tr>
        	<tr>
				<td><input   type="Submit" value="Versenden"/></td>
        	</tr>
        </table>
		</form>
        
	
<?php	 	
}
?>
<?php
function getComments(){

//access database

 connectMySQL();
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
         echo "<br/><b>". htmlspecialchars($row["fname"]). "</b> hat den Kommentar: <b>". htmlspecialchars($row["nachricht"])."</b> geschrieben um/am ".$row["datetime"];
     }
} else {
     echo "0 results";
}

$conn->close();
}
?>
