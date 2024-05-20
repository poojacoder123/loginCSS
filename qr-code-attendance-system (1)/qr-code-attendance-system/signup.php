<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwpschoolpress.com%2Fpurpose-of-the-attendance-management-system-schools%2F&psig=AOvVaw3UsC8OSJ6nYb1wp5G3tasX&ust=1716022628716000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIibp8uolIYDFQAAAAAdAAAAABAE');
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        #signup-container {
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 320px;
            text-align: center;
        }
        h2 {
            color: #333;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 6px;
            color: #666;
        }
        input[type="text"],
        input[type="password"] {
            width: calc(100% - 24px);
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        .success-message {
            color: #28a745;
            margin-top: 10px;
        }
        .login-link {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div id="signup-container">
        <h2>Sign Up</h2>
        <?php
        // Display success message if it exists
        if (isset($_SESSION['signup_success'])) {
            echo "<p class='success-message'>{$_SESSION['signup_success']}</p>";
            unset($_SESSION['signup_success']); // Remove success message from session
        }
        ?>
        <!-- Signup form -->
        <form action="register.php" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Sign Up">
        </form>
        <p>Already have an account? <a href="login.php" class="login-link">Login</a></p>
    </div>
</body>
</html>
