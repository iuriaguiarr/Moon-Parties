const Event = require('../models/Event');
const Guest = require('../models/Guests');
const Message = require('../models/Message');
const Services = require('./ServicesController');

require('dotenv/config');

module.exports = {
  async cadastro(req, res) {
    const { event_id, titulo, descricao } = req.body;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ error: 'Evento não encontrado' });
    }

    const message = await Message.create({
      event_id,
      titulo,
      descricao,
    });
    return res.json(message);
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const message = await Message.findByPk(id);

      if (!message) {
        return res.json({ Message: 'Mensagem não encontrada' });
      }
      await Message.destroy({
        where: {
          id,
        },
      });
      return res.json({ Message: 'Excluído com sucesso' });
    } catch (error) {
      return res.json({
        Message: 'Problema encontrado ao excluir a mensagem',
      });
    }
  },
  async read(req, res) {
    const { id } = req.params;

    const message = await Message.findByPk(id);
    if (!message) {
      return res.json({ Message: 'Mensagem não encontrada' });
    }
    return res.json(message);
  },
  async alterar_mensagem(req, res) {
    const { id, titulo, descricao } = req.body;

    const message = await Message.findByPk(id);

    if (!message) {
      return res.json({ Message: 'Memsagem não encontrada' });
    }
    try {
      await Message.update(
        { titulo, descricao },
        {
          where: {
            id,
          },
        },
      );
      return res.json({ Message: 'Dados alterados com sucesso' });
    } catch (error) {
      return res.json({ Message: 'Erro ao alterar dados' });
    }
  },
  async enviar_mensagem(req, res) {
    const { id, event_id } = req.body;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ error: 'Evento não encontrado' });
    }
    const message = await Message.findByPk(id);

    const guests = await Guest.findAll({
      attributes: ['email'],
      where: { event_id },
    });
    // eslint-disable-next-line eqeqeq
    if (guests == 0) {
      return res.status(400).json({ error: 'Esse evento não tem convidados' });
    }
    const emails = [];
    guests.map(email => emails.push(email.email));

    const mailOptions = {
      from: process.env.EMAIL_NODEMAILER, // E-mail do administrador
      to: emails, // Para quem o e-mail vai ser enviado
      subject: message.titulo, // Título
      text: message.descricao, // Escopo do e-mail
    };
    try {
      Services.sendEmail(mailOptions);
      return res.status(200).json({ error: 'Mensagem enviada com sucesso' });
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Erro ao enviar o e-mail, por favor, tente novamente' });
    }
  },
};
