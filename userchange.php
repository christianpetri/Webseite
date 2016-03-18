<?php
session_start();
$username=$_SESSION["username"];
$fname=htmlspecialchars($_POST["fname"]);
$lname=htmlspecialchars($_POST["lname"]);
$end=false;

if(isset($_POST["fname"])&&isset($_POST["lname"])){
	//access database
	 
		$servername = "mysql.kontakt.christianpetri.ch";
		$usernamesql = "kontaktchristian";
		$password = "!Asperger!6815";
		$dbname = "kontaktchristianpetri";
	$_SESSION["fname"]=$fname;
	$_SESSION["lname"]=$lname;
	 
	//connect to database
	$conn = new mysqli($servername, $usernamesql, $password, $dbname);
	// Check connection
	 if($conn->connect_errno){
		  die('Connect Error: ' . $conn->connect_errno);
	}
	$sql="UPDATE userdata SET fname='$fname', lname='$lname' WHERE username='$username'" ;
	 //if ($conn->query($sql) === TRUE) { echo "Record updated successfully";	} 
 	$conn->query($sql);
	$conn->close();
	$end=true;
	 
}
if($end){header("Location:http://www.kontakt.christianpetri.ch/userloggedin.php?"."userchange="."1");}
?>