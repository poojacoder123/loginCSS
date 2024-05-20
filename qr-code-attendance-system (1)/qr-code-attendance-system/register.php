<?php
// register.php

// Include database connection or any other required files
include_once('conn/conn.php');

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate input data (you can add more validation as needed)
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Store registration data in the database
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
    $stmt->bindValue(':username', $username);
    $stmt->bindValue(':password', $hashedPassword);
    $stmt->execute();

    // Redirect to login page after successful registration
    header("Location: login.php");
    exit();
}
?>
