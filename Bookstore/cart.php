
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="description" content="">
        <meta name="author" content="">

        <title>Add to cart</title>

        <!-- CSS FILES -->        
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <link href="css/bootstrap-icons.css" rel="stylesheet">

        <link href="css/templatemo-kind-heart-charity.css" rel="stylesheet">


    </head>
    
    <body id="section_1">
       <?php include './nav.php' ?>
        <main>
        <div class="container mt-5">
        <h1 style="color:#62c4b0;">Your Cart</h1>
        <div class="row">
            <?php
            // Database connection
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "myuser";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Fetch cart items from database
            $sql = "SELECT title, author, price, imageUrl FROM cart";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Output data of each row
                while($row = $result->fetch_assoc()) {
                    echo '<div class="col-md-4"  >';
                    echo '    <div class="card mb-4 " style="height:380px">';
                    echo '        <img src="' . $row["imageUrl"] . '" class="card-img-top" style="height:200px" alt="Book Cover">';
                    echo '        <div class="card-body">';
                    echo '            <h5 class="card-title">' . $row["title"] . '</h5>';
                    echo '            <p class="card-text"><strong>Author:</strong> ' . $row["author"] . '</p>';
                    echo '            <p class="card-text">' . $row["price"] .  ' Pounds</p>';
                    echo '        </div>';
                    echo '    </div>';
                    echo '</div>';
                }
            } else {
                echo "Your cart is empty";
            }

            $conn->close();
            ?>
        </div>
    </div>
        </main>   
        <?php include './footer.php' ?>
        <!-- JAVASCRIPT FILES -->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/click-scroll.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>

    </body>
</html>