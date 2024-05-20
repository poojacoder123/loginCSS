<?php 
 
if($_SERVER['REQUEST_METHOD']=='POST'){
    include "databaseCon/db.con.php";
    $showAlert = false;
    $email = $_POST['email'];
    $password = $_POST['password'];
     $exist =false;
     if($exist ==false){
        $sql = "INSERT INTO `authuser` ( `email`, `password`) VALUES ('$email', '$password')";
        $result = mysqli_query($con, $sql);
        if($result){
            $showAlert = true;
            header("location: login.php");  
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
        <title>Sign Up</title>
        <!-- CSS FILES -->        
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/bootstrap-icons.css" rel="stylesheet">
        <link href="css/templatemo-kind-heart-charity.css" rel="stylesheet">
        <link href="css/signup.css" rel="stylesheet">

    </head>
<body>
  
<section>

<div class="card mt-5 p-5 justify-content-center">
        <h2 style="color:#62C4B0"  class="mb-4">Sign In</h2>

     
        <form action="signin.php" method="post" class="form" >
            <input type="email" placeholder="Email Adress" name="email"  class="email">
            <input type="password" placeholder="password" name="password" class="pass">
            <input type="submit" class="login_btn" value="Signup">

            </form>

      
        <div class="footer_card">
        <p>Already sign in?</p>
        <a href="./login.php">Login</a>
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