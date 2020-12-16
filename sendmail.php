<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';
  // require 'path/to/PHPMailer/src/SMTP.php';

  // Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('en', 'phpmailer/language/');
  $mail->isHTML(true); 

  $mail->setFrom('ulia.grichishuk@gmail.com', 'Draivn');
  $mail->addAddress('ulia.grichishuk@gmail.com');     // Add a recipient
  $mail->Subject = 'Letter from user!';

  $body = '<h1>You have one letter from visitor of draivn.com</h1>'

  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Error';
  } else {
    $message = 'Data has been sent!';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>