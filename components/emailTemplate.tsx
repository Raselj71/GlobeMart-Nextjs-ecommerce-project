export const verificationTemplate = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333333;
    }

    p {
      color: #666666;
    }

    .button {
      display: inline-block;
      background-color: #007bff;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 20px;
    }

    .button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Verify Your Email Address</h1>
    <p>Thank you for registering with Globemart! To complete your registration, please verify your email address by clicking the button below:</p>
    <a href="http://yourwebsite.com/verify?token={{verificationToken}}" class="button">Verify Email</a>
    <p>If you did not create an account with Globemart, you can safely ignore this email.</p>
    <p>Thank you,<br>Globemart Team</p>
  </div>
</body>
</html>
 `;
};
