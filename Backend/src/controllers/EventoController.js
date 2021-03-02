const User = require('../models/User');
const Event = require('../models/Event');
const Guest = require('../models/Guests');
const Message = require('../models/Message');

module.exports = {
  async cadastro(req, res) {
    const {
      user_id,
      titulo,
      descricao,
      data_evento,
      preco,
      localidade,
    } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const evento = await Event.create({
      user_id,
      titulo,
      descricao,
      data_evento,
      preco,
      localidade,
    });

    return res.json(evento);
  },
  async alterar_evento(req, res) {
    const { id, titulo, descricao, data_evento, preco, localidade } = req.body;

    const evento = await Event.findByPk(id);

    if (!evento) {
      return res.json({ Message: 'Evento não encontrado' });
    }
    try {
      await Event.update(
        { titulo, descricao, data_evento, preco, localidade },
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
  async index(req, res) {
    const eventos = await Event.findAll();

    return res.json(eventos);
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const evento = await Event.findByPk(id);

      if (!evento) {
        return res.json({ Message: 'Evento não encontrado' });
      }

      await Event.destroy({
        where: {
          id,
        },
      });
      return res.json({ Message: 'Excluído com sucesso' });
    } catch (error) {
      return res.json({ Message: 'Evento não encotnrado' });
    }
  },
  async read(req, res) {
    const { id } = req.params;

    const event = await Event.findByPk(id);
    if (!event) {
      return res.json({ Message: 'Evento não encontrado' });
    }
    const guest = await Guest.findAll({
      where: { event_id: id },
    });
    const message = await Message.findAll({
      where: { event_id: id },
    });
    return res.json({ Evento: event, Convidados: guest, Mensagens: message });
  },
};
