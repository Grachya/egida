<?php

$llcname = $_GET['llcname'];
$phone = $_GET['phone'];
$name = $_GET['name'];
$email = $_GET['email'];
$comments = $_GET['comments'];

$emailTo = "grach41@gmail.com, volkowa.oksan@yandex.ru";


$result = mail($emailTo, "Заявка с сайта", "Организация: $llcname \nТелефон: $phone \nФИО: $name \nЭлектронный адрес: $email \nСобщение: $comments");

?>