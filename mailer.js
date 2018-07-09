var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'my_mail@gmail.com',
    pass: 'my_pass'
  }
});

var mailOptions = {
  from: 'my_mail@gmail.com',
  to: 'my_mail_2@gmail.com',
  subject: 'Отправка почты с помощью Node.js',
  text: 'Отправка почты с помощью Node.js'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 