<?php 
 
if($_SERVER['REQUEST_METHOD']=='POST'){
    include "databaseCon/db.con.php";
    $login = false;
    $showAlert = false;
    $email = $_POST['email'];
    $password = $_POST['password'];
     $exist =false;
     if($exist ==false){
        $sql = "Select * from authuser where email ='$email' AND password = '$password'";
        $result = mysqli_query($con, $sql);
        $numQuery = mysqli_num_rows($result);
        if($numQuery ==1){
            $login = true;
            session_start();
            $_SESSION['loggedin'] = true;
            $_SESSION['email'] = $email;
            header("location: index.php");  
            // print_r("hello");  
        } 
     }
      
    exit();
}
 ?>


<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Log in</title>
        <!-- CSS FILES -->        
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/bootstrap-icons.css" rel="stylesheet">
        <link href="css/templatemo-kind-heart-charity.css" rel="stylesheet">
        <link href="css/signup.css" rel="stylesheet">
    </head>
<body>
<section>
<div class="card mt-5 p-5 justify-content-center">
        <h2 style="color:#62C4B0"  class="mb-4">Log In</h2>

     
        <form action="login.php" method="post" class="form" >
            <input type="email" placeholder="Email Adress" name="email"  class="email">
            <input type="password" placeholder="password" name="password" class="pass">
            <input type="submit" class="login_btn" value="Login">

            </form>

      
        <div class="footer_card">
        <p>Dont have account?</p>
        <a href="./signin.php">Click to sign up</a>
        </div>
    </div>

     </section>
   
   

    <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/click-scroll.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>

    </body>
</html>