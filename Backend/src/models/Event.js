const { Model, DataTypes } = require('sequelize');

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        data_evento: DataTypes.DATE,
        preco: DataTypes.STRING,
        localidade: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'events',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    this.hasMany(models.Guest, { foreignKey: 'event_id', as: 'guests' });
    this.hasMany(models.Message, { foreignKey: 'event_id', as: 'message' });
  }
}

module.exports = Event;
