<?php
//mysql preferences
$servername = "localhost";
$user = "example_user";
$password = "password";
$database = "example_database";
$table = "feedbacks";

//create connection to database
$conn = new mysqli($servername, $user, $password, $database);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

//create select request from database
$sql = "SELECT * FROM $table";
//call request and get result
$result = $conn->query($sql);

//print result
if ($result->num_rows > 0) {
    echo "<table cellspacing='2' border='1' cellpadding='5'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>SUBJECT</th>
                <th>MESSAGE</th>
            </tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["id"]. "</td>";
        echo "<td>" . $row["name"]. "</td>";
        echo "<td>" . $row["email"]. "</td>";
        echo "<td>" . $row["subject"]. "</td>";
        echo "<td>" . $row["message"]. "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

//clpse connection
$conn->close();
?>
