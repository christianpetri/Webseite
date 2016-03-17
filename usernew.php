<?php 
$username	=htmlspecialchars($_POST["username"])	;
$fname		=htmlspecialchars($_POST["fname"])		;
$lname		=htmlspecialchars($_POST["lname"])		;
$password1	=md5($_POST["password1"])	;
$password2	=md5($_POST["password2"])	;
$passcheck = false;
$hello123=false;
if($hello123===false){$hello123=true;}
if($hello123){
	header("Location:http://www.kontakt.christianpetri.ch/user.php?"."username=".$username."&fname=".$fname."&lname=".$lname);} 
/*
if((isset($_POST["password1"]))&&(isset($_POST["password2"]))){
	 
		if($password2===$password2){
				$passcheck=true;
	 	}
}

if(isset($_POST["username"])&&isset($_POST["fname"])&&isset($_POST["lname"])&&isset($_POST["password1"])&&$passcheck&&false){
	//access database
	
		$servername = "mysql.kontakt.christianpetri.ch";
		$username = "kontaktchristian";
		$password = "!Asperger!6815";
		$dbname = "kontaktchristianpetri";
	
	 
	//check if table exists
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	 if($conn->connect_errno){
		  die('Connect Error: ' . $conn->connect_errno);
	}
	
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
	//$url="http://www.kontakt.christianpetri.ch/userloggedin.php";
	//header('Location:$url');
	//exit;
} else {
	*/
	
	
//}

?>






 