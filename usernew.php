 <?php include ("php/header.php");
printHead("User");
printNavigation("fixedtopnav");
printNavigation("fixedbottomnav");
?>

<?php 
$username	=htmlspecialchars($_POST["username"])	;
$fname		=htmlspecialchars($_POST["fname"])		;
$lname		=htmlspecialchars($_POST["lname"])		;
$password	=htmlspecialchars($_POST["password"])	;
$passcheck = false;
if((isset($_POST["password"]))===(isset($_POST["password2"]))){
	 
		$passcheck=true;
	 
}

if(isset($_POST["username"])&&isset($_POST["fname"])&&isset($_POST["lname"])&&isset($_POST["password"])){
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
	$stmt=$conn->prepare ("INSERT INTO userdata  (username, fname,lname,password) VALUES (?,?,?,?)");
	$stmt->bind_param("ssss",$username,$fname, $lname,$password);
	
	$username	=htmlspecialchars($_POST["username"])	;
	$fname		=htmlspecialchars($_POST["fname"])		;
	$lname		=htmlspecialchars($_POST["lname"])		;
	$password	=htmlspecialchars($_POST["password"])	;
	$stmt->execute();
	echo "<h1>Erfolgreich Registriert</h1>";
 
	echo "<p>"."Danke, ".$fname." ".$lname." für die Registrierung des Benutzername ".$username."</p>";
	echo "<br/>"."<p>".$nachricht."</p>";
	
	$stmt->close();
	$conn->close();
	
} else {
	echo "<h1>Bitte</h1>";
	//$stayhere
	
}

?>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method='post'>
	<input type="text" name="username" placeholder="Benutername" value="<?php echo $fname;?>"> 
    <span><?php 
		if((isset($_POST["username"])	=== false	)){	echo	" * noch Benutzername einfügen ";		} 
	?> </span>
    </br>
	<input type="text" name="fname" placeholder="Vorname">
	<input type="text" name="lname" placeholder="Nachname">
     <span><?php 
		if((isset($_POST["fname"])		=== false	)){	echo	" * noch Vorname einfügen ";			} 
		if((isset($_POST["lname"])		=== false	)){	echo	" * noch Nachname einfügen ";			}  
	?> </span>
    </br> 
    
    <input type="password" name="password" placeholder="Passwort">
    <input type="password" name="password2" placeholder="Passwort wiederholen">
    <span><?php 
		if((isset($_POST["password"])	=== false	)){	echo	" *noch Passwort einfügen ";			
		}elseif($passcheck===false){ 
			 echo	" Passwoerter stimmen nicht ueberein";	
		}	
	?> </span>
    </br>
    <input type="submit" placeholder="Abschicken"/>


</form>





<?php footer();?>