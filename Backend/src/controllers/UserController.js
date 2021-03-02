const User = require('../models/User');
const Service = require('./ServicesController');

require('dotenv/config');

module.exports = {
  async login(req, res) {
    const { email, senha } = req.body;

    const [users] = await User.findAll({
      where: { email },
    });
    if (!users) {
      return res.json({ Message: 'Usuário não encontrado' });
    }
    if (users.senha !== senha) {
      return res.json({ Message: 'Senha incorreta' });
    }
    return res.json(users);
  },
  async alterar_dados(req, res) {
    const {
      email_antigo,
      senha_antiga,
      novo_email,
      nova_senha,
      nome,
    } = req.body;

    const [users] = await User.findAll({
      where: { email: email_antigo },
    });
    if (!users) {
      return res.json({ Message: 'Usuário não encontrado' });
    }
    if (users.senha !== senha_antiga) {
      return res.json({ Message: 'Senha incorreta' });
    }
    try {
      await User.update(
        { nome, email: novo_email, senha: nova_senha },
        {
          where: {
            email: email_antigo,
          },
        },
      );
      return res.json({ Message: 'Dados alterados com sucesso' });
    } catch (error) {
      return res.json({ Message: 'Erro ao alterar dados' });
    }
  },

  async store(req, res) {
    // const { name, email, senha } = req.body;
    const id_user = 'Asd123';
    const name = 'Felipe';
    const email = '123@gmail.com';
    const senha = '123';

    const user = await User.create({ id_user, name, email, senha });

    return res.json(user);
  },
  async recuperar_senha(req, res) {
    const { email } = req.body;

    const [users] = await User.findAll({
      where: { email },
    });
    if (!users) {
      return res.json({ Message: 'Usuário não encontrado' });
    }
    const mailOptions = {
      from: process.env.EMAIL_NODEMAILER, // E-mail do administrador
      to: users.email, // Para quem o e-mail vai ser enviado
      subject: `RECUPERAÇÃO DE SENHA`, // Título
      text: `Olá ${users.name}, sua senha é: ${users.senha}`, // Escopo do e-mail
    };
    try {
      Service.sendEmail(mailOptions);
      return res.status(200).json({
        Message: 'Verifique seu e-mail para recuperar sua senha',
      });
    } catch (error) {
      return res.status(400).json({
        Message: 'Erro ao enviar o e-mail, por favor, tente novamente',
      });
    }
  },
};
