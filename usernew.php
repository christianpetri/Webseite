<?php
session_start();
 
// remove all session variables
session_unset(); 
 
?>
?>
<?php
// Set session variables
 
 
 
?>
<?php 
$username	=htmlspecialchars($_POST["username"])	;
$fname		=htmlspecialchars($_POST["fname"])		;
$lname		=htmlspecialchars($_POST["lname"])		;
$password1	=md5($_POST["password1"])	;
$password2	=md5($_POST["password2"])	;
$passcheck = false;
$success=false;

if((isset($_POST["password1"]))&&(isset($_POST["password2"]))){
	 
		if($password2===$password2){
				$passcheck=true;
	 	}
}

if(isset($_POST["username"])&&isset($_POST["fname"])&&isset($_POST["lname"])&&isset($_POST["password1"])&&$passcheck){
	//access database
	
		$servername = "mysql.kontakt.christianpetri.ch";
		$usernamesql = "kontaktchristian";
		$password = "!Asperger!6815";
		$dbname = "kontaktchristianpetri";
	
	 
	//connect to database
	$conn = new mysqli($servername, $usernamesql, $password, $dbname);
	// Check connection
	 if($conn->connect_errno){
		  die('Connect Error: ' . $conn->connect_errno);
	}
	//check if user exists$
	$sql = "SELECT username FROM userdata WHERE username='$username'";
	$result = $conn->query($sql);
	if(($result->num_rows)>0){
		$conn->close();
		header("Location:http://www.kontakt.christianpetri.ch/user.php?"."username=".$username."&fname=".$fname."&lname=".$lname."&userexists=1");
		
	} else{
	$_SESSION["fname"] = $fname;
	$_SESSION["lname"] = $fname;
	$_SESSION["username"] = $username;
	//instert values intp dabase
	$stmt=$conn->prepare ("INSERT INTO userdata  (username, fname,lname,password) VALUES (?,?,?,?)");
	$stmt->bind_param("ssss",$username,$fname, $lname,$password);
	
	$username	=htmlspecialchars($_POST["username"])	;
	$fname		=htmlspecialchars($_POST["fname"])		;
	$lname		=htmlspecialchars($_POST["lname"])		;
	$password	=md5			($_POST["password1"])	;
	$stmt->execute();
		
	$stmt->close();
	$conn->close();
	$success=true;
	}
} else {
	
	header("Location:http://www.kontakt.christianpetri.ch/user.php?"."username=".$username."&fname=".$fname."&lname=".$lname);
	
}
if($success){ header("Location:http://www.kontakt.christianpetri.ch/userloggedin.php");}
?>






 