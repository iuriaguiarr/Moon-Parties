const { Model, DataTypes } = require('sequelize');

class Message extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'messages',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Event, {
      foreignKey: 'event_id',
      as: 'e_message',
    });
  }
}

module.exports = Message;
