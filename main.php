<?php
//mysql preferences
$servername = "localhost";
$user = "example_user";
$password = "password";
$database = "example_database";
$table = "feedbacks";


//get data from form
$formName = $_POST['name'];
$formEmail = $_POST['email'];
$formSubject = $_POST['subject'];
$formMessage = $_POST['message'];

//connect to mysql database
$conn = new mysqli($servername, $user, $password, $database);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

$sql_exist = "SELECT `email` FROM $table WHERE `email` = '$formEmail'";

$select = $conn->query($sql_exist);

if(mysqli_num_rows($select)) {
  throw new Exception('This email is already being used');
}

//create sql request to database
$sql = "INSERT INTO $table (name, email, subject, message) VALUES (
  '$formName', '$formEmail', '$formSubject', '$formMessage'
)";

//call sql request
$conn->query($sql);

//close connection to database
$conn->close();
?>
