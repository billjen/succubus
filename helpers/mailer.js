const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "kingmailer.org",
    port: 465,
    // secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "billstromjennifer-gmail-com/free-trial",
      pass: "eFR00cPAgyRxcRbsWQYDQHWK"
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  function mailer() {
    // send mail with defined transport object
    return transporter.sendMail({
      from: '"Fred Foo 👻" <foo@trustinboxpanel.com>', // sender address
      to: "billstromjennifer@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
  }
  

  module.exports = mailer;
//   main().catch(console.error);