const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'users',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Event, { foreignKey: 'user_id', as: 'events' });
  }
}

module.exports = User;
