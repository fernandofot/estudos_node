var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fernando.fot84@gmail.com',
    pass: 'emfpivnzgnosruat'
  }
});

var mailOptions = {
  from: 'fernando.fot84@gmail.com',
  to: 'alefeans2@hotmail.com, paradiso.claudio@gmail.com, nanmudblind@gmail.com',
  subject: 'Enviando email atraves do Node.js',
  text: 'Humilhei o Java hein'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
