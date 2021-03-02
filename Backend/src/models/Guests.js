const { Model, DataTypes } = require('sequelize');

class Guest extends Model {
  static init(sequelize) {
    super.init(
      {
        event_id: DataTypes.INTEGER,
        email: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'guests',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Event, { foreignKey: 'event_id', as: 'e_guest' });
  }
}

module.exports = Guest;
