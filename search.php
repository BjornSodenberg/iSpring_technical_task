<?php
//mysql preferences
$servername = "localhost";
$user = "example_user";
$password = "password";
$database = "example_database";
$table = "feedbacks";

$email = $_POST['email'];
//create connection to database
$conn = new mysqli($servername, $user, $password, $database);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  
//create select request from database
$sql = "SELECT * FROM $table WHERE `email` = '$email';";
//call request and get result
$result = $conn->query($sql);
//print result
if ($result->num_rows > 0) {
    $str = $str ."<table cellspacing='2' border='1' cellpadding='5'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>SUBJECT</th>
                <th>MESSAGE</th>
            </tr>";

    while($row = $result->fetch_assoc()) {
        $str = $str ."<tr>";
        $str = $str ."<td>" . $row["id"]. "</td>";
        $str = $str ."<td>" . $row["name"]. "</td>";
        $str = $str ."<td>" . $row["email"]. "</td>";
        $str = $str ."<td>" . $row["subject"]. "</td>";
        $str = $str ."<td>" . $row["message"]. "</td>";
        $str = $str ."</tr>";
    }
    $str = $str . "</table>";
} else {
    $str = $str . "0 results";
}

//clpse connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Show database</title>
</head>
<body>
  <form method="post">
    <input type="text" name="email">
    <button type="submit">Показать</button>
  </form> 

  <div><?php echo $str; ?></div>
</body>
</html>
