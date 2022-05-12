<?php
$user = "example_user";
$password = "password";
$database = "example_database";
$table = "feddbacks";

$formName = $_POST['name'];
$formEmail = $_POST['email'];
$formSubject = $_POST['subject'];
$formMessage = $_POST['message'];

try {
  $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
  $db->query("
    INSERT INTO $database.$table (name, email, subject, message) 
    VALUES (
        '$formName',    
        '$formEmail',    
        '$formSubject',    
        '$formMessage',    
    )
  ");
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
