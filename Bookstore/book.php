
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="description" content="">
        <meta name="author" content="">

        <title>Find Book</title>

        <!-- CSS FILES -->        
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <link href="css/bootstrap-icons.css" rel="stylesheet">

        <link href="css/templatemo-kind-heart-charity.css" rel="stylesheet">


    </head>
    
    <body id="section_1">
       <?php include './nav.php' ?>
        <main>
       
        <div class="container mt-5">
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

            // Fetch books from database
            $sql = "SELECT id,title, author, price, imageUrl FROM books";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Output data of each row
                while($row = $result->fetch_assoc()) {
                    echo '<div class="col-md-3">';
                    echo '    <div class="card mb-4" style="height:400px;" >';
                    echo '        <img src="' . $row["imageUrl"] . '" class="card-img-top" style="height:200px;" alt="Book Cover">';
                    echo '        <div class="card-body">';
                    echo '            <h5 class="card-title">' . $row["title"] . '</h5>';
                    echo '            <p class="card-text"><strong>Author:</strong> ' . $row["author"] . '</p>';
                    echo '            <p class="card-text">' . $row["price"] . ' £  </p> ';
                    echo '            <form action="add_to_cart.php" method="post">';
                    echo '                <input type="hidden" name="id" value="' . $row["id"] . '">';
                    echo '                <input type="hidden" name="title" value="' . $row["title"] . '">';
                    echo '                <input type="hidden" name="author" value="' . $row["author"] . '">';
                    echo '                <input type="hidden" name="price" value="' . $row["price"] . '">';
                    echo '                <input type="hidden" name="imageUrl" value="' . $row["imageUrl"] . '">';
                    echo '                <button type="submit" class="btn btn-primary">Add to Cart</button>';
                    echo '            </form>';
                    echo '        </div>';
                    echo '    </div>';
                    echo '</div>';
                }
            } else {
                echo "0 results";
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