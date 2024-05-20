<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Attendance Management System</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-image: url('download.png'); /* Replace with your chosen background image */
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        label {
            margin-top: 10px;
        }
        input[type="text"],
        input[type="password"],
        input[type="submit"] {
            padding: 12px;
            margin-top: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box; /* Added for consistent sizing */
        }
        input[type="submit"] {
            background-color: #5cb85c;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #4cae4c;
        }
        .admin-login-link {
            text-align: center;
            margin-top: 20px;
        }
        .admin-login-link a {
            color: #5cb85c;
            text-decoration: none;
            font-weight: bold;
        }
        .admin-login-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form method="post" action="validate_login.php">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" required><br>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required><br>
            <input type="submit" value="Login">
        </form>
        <div class="admin-login-link">
            <a href="admin_login.php">Admin Login</a>
        </div>
    </div>
</body>
</html>
