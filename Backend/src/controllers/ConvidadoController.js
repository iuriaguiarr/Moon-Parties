const Event = require('../models/Event');
const Guest = require('../models/Guests');

module.exports = {
  async cadastro(req, res) {
    const { event_id, email } = req.body;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ error: 'Evento não encontrado' });
    }
    const [guest_exist] = await Guest.findAll({
      where: {
        event_id,
        email,
      },
    });
    if (guest_exist) {
      return res
        .status(400)
        .json({ error: 'Você já se inscreveu para esse evento' });
    }
    const guest = await Guest.create({
      event_id,
      email,
    });
    return res.json(guest);
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      const guest = await Guest.findByPk(id);

      if (!guest) {
        return res.json({ Message: 'Convidado não encontrado' });
      }
      await Guest.destroy({
        where: {
          id,
        },
      });
      return res.json({ Message: 'Excluído com sucesso' });
    } catch (error) {
      return res.json({
        Message: 'Problema encontrado ao excluir o convidado',
      });
    }
  },
};
