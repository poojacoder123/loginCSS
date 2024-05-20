<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the credentials are "admin" and "admin"
    if ($username === 'admin' && $password === 'admin') {
        $_SESSION['admin_username'] = $username;
        header("Location: admin_dashboard.php");
        exit();
    } else {
        // Invalid credentials
        header("Location: admin_login.php?error=Invalid credentials");
        exit();
    }
} else {
    header("Location: admin_login.php");
    exit();
}
