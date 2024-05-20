<?php

$_SERVER ="localhost";
$Username = "root";
$password = "";
$database = "myUser";

$con = mysqli_connect($_SERVER,$Username,$password, $database);

if($con){
    // echo "connection  successfully established";
}

?>