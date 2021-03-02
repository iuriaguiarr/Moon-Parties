const nodemailer = require('nodemailer');
require('dotenv/config');

module.exports = {
  sendEmail(mailOptions) {
    /* Função responsável pela seleção do serviço de envio, neste caso Gmail, e também por efetuar o envio do e-mail */

    /* Selecionando o serviço de envio */
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.SENHA_NODEMAILER,
      },
    });

    /* Enviando o e-mail */
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email enviado: ${info.response}`);
      }
    });
  },
};
