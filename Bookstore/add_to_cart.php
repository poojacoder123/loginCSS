<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myuser";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection

if($conn){
    // echo "connection  successfully established";
}
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $book_id = $_POST['id'];
    $title = $_POST['title'];
    $author = $_POST['author'];
    $price = $_POST['price'];
    $imageUrl = $_POST['imageUrl'];

    // Insert into cart
    $sql = "INSERT INTO `cart` ( `id`, `title`, `price`, `author`, `imageUrl`) VALUES ('$book_id', '$title', '$price','$author','$imageUrl')";
    $result = mysqli_query($conn, $sql);
    if($result){
        header("location: cart.php");  
       
    }   
    }
?>