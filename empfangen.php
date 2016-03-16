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
$stmt=$conn->prepare ("INSERT INTO kontaktformularhome  (fname,lname,email,nachricht) VALUES (?,?,?,?)");
$stmt->bind_param("ssss",$fname,$lname, $email,$nachricht);
if(isset($_POST["fname"]		)){$fname		=$_POST["fname"]		;}else{$fname		="nofname";		} 
if(isset($_POST["lname"]		)){$lname		=$_POST["lname"]		;}else{$lname		="nolname";		} 
if(isset($_POST["email"]		)){$email		=$_POST["email"]		;}else{$email		="noemail";		} 
if(isset($_POST["nachricht"]	)){$nachricht	=$_POST["nachricht"]	;}else{$nachricht	="nonachricht";	} 
$stmt->execute();
echo "<h1>"."Danke für die Nachricht"."</h1>"."<br/>";
echo "<p>"."Danke, ".$fname." für die Nachricht"."</p>";
echo "<br/>"."<p>".$nachricht."</p>";

$stmt->close();
$conn->close();

?>
</body>
</html>