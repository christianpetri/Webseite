<?php include ("php/header.php");
printHead("Nachricht empfangen");
printNavigation("fixedtopnav");

?>

<?php 


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

//instert values intp dabase
$stmt=$conn->prepare ("INSERT INTO kontaktformularhome  (fname,lname,website,nachricht) VALUES (?,?,?,?)");
$stmt->bind_param("ssss",$fname,$lname, $website,$nachricht);
if(isset($_POST["fname"]		)){$fname		=htmlspecialchars($_POST["fname"])		;}else{$fname		="nofname";		} 
if(isset($_POST["lname"]		)){$lname		=htmlspecialchars($_POST["lname"])		;}else{$lname		="nolname";		} 
if(isset($_POST["email"]		)){$website		=htmlspecialchars($_POST["website"])	;}else{$website		="nowebsite";		} 
if(isset($_POST["nachricht"]	)){$nachricht	=htmlspecialchars($_POST["nachricht"])	;}else{$nachricht	="nonachricht";	} 
$stmt->execute();
echo "<h1>"."Danke für die Nachricht"."</h1>"."<br/>";
echo "<p>"."Danke, ".$fname." für den Kommentar"."</p>";
echo "<br/>"."<p>".$nachricht."</p>";

$stmt->close();
$conn->close();

?>

</body>
</html>