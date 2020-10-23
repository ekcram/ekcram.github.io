<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<?php
$email = $_POST['email'];
$message = $_POST['message'];

?>

<body>
    <p><strong>Email: </strong> <?= $email; ?></p>
    <p><strong>Message: </strong> <?= $message; ?></p>
</body>

</html>