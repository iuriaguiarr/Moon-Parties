const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Event = require('../models/Event');
const Guests = require('../models/Guests');
const Message = require('../models/Message');

const connection = new Sequelize(dbConfig);

User.init(connection);
Event.init(connection);
Guests.init(connection);
Message.init(connection);

User.associate(connection.models);
Event.associate(connection.models);
Guests.associate(connection.models);
Message.associate(connection.models);

module.exports = connection;
