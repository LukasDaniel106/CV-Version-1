<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Eingabedaten sicher machen
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // E-Mail-Empfänger
    $to = "duuhallo926@gmail.com"; // Ersetze dies durch deine tatsächliche E-Mail-Adresse

    // Betreff der E-Mail
    $subject = "Neue Nachricht von $name";

    // Inhalt der E-Mail
    $body = "Name: $name\n";
    $body .= "E-Mail: $email\n\n";
    $body .= "Nachricht:\n$message";

    // Header der E-Mail
    $headers = "From: $email";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht erfolgreich gesendet.";
    } else {
        echo "Fehler beim Senden der Nachricht.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
