<?php
// validate_login.php

session_start();

// Include database connection or any other required files
include_once('conn/conn.php');

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    try {
        // Prepare SQL statement to retrieve hashed password for the given username
        $stmt = $conn->prepare("SELECT password FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        // Fetch the result
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            $hashedPassword = $row['password'];

            // Compare the input password with the hashed password using password_verify()
            if (password_verify($password, $hashedPassword)) {
                // Authentication successful, set session variable
                $_SESSION['username'] = $username;
                // Redirect to index.php or any other page
                header("Location: index.php");
                exit();
            } else {
                // Authentication failed, redirect back to login page with error message
                $_SESSION['login_error'] = "Invalid username or password. Please try again.";
                header("Location: login.php");
                exit();
            }
        } else {
            // Username not found, redirect back to login page with error message
            $_SESSION['login_error'] = "Invalid username or password. Please try again.";
            header("Location: login.php");
            exit();
        }
    } catch (PDOException $e) {
        // Display error message if there's an issue with the query
        $_SESSION['login_error'] = "Error occurred while processing your request. Please try again later.";
        header("Location: login.php");
        exit();
    }
}
?>
