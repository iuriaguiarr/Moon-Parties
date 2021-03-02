const express = require('express');

const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventoController');
const GuestController = require('./controllers/ConvidadoController');
const MessageController = require('./controllers/MessageController');

const routes = express.Router();

// Usuário
routes.get('/users', UserController.store);
routes.post('/login', UserController.login);
routes.put('/alterar-dados', UserController.alterar_dados);
routes.post('/recuperar-senha', UserController.recuperar_senha);

// Evento
routes.post('/evento', EventController.cadastro);
routes.put('/alterar-evento', EventController.alterar_evento);
routes.get('/evento', EventController.index);
routes.delete('/evento/:id', EventController.delete);
routes.get('/read-evento/:id', EventController.read);

// Convidado
routes.post('/convidado', GuestController.cadastro);
routes.delete('/convidado/:id', GuestController.delete);
// Mensagens
routes.post('/message', MessageController.cadastro);
routes.get('/read-message/:id', MessageController.read);
routes.delete('/message/:id', MessageController.delete);
routes.put('/alterar-message', MessageController.alterar_mensagem);
routes.post('/enviar-message', MessageController.enviar_mensagem);

module.exports = routes;
