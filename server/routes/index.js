// const usersController = require('../db/controllers').users;
// const todosController = require('../db/controllers').todos;
// const todoItemsController = require('../db/controllers').todoItems;

import { verifyToken, verifyOwnership } from '../auth';

const AccountController = require('../mail/controllers/account');
const ContactsController = require('../mail/controllers/contacts');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Ornament-Mail-Server!',
  }));

  app.get('/api/mail/accounts', verifyToken, AccountController.getAccount);

  app.post('/api/mail/folders', verifyToken, ContactsController.createFolder);
  app.get('/api/mail/folders/:folderId', verifyToken, verifyOwnership, ContactsController.getFolderLists);
  app.post('/api/mail/folders/:folderId/lists', verifyToken, verifyOwnership, ContactsController.createList);
  app.put('/api/mail/folders/:folderId/lists/:listId', verifyToken, verifyOwnership, ContactsController.updateList);
  app.delete('/api/mail/folders/:folderId/lists/:listId', verifyToken, verifyOwnership, ContactsController.deleteList);

  // app.post('/auth/register', usersController.register);
  // app.post('/auth/sign_in', usersController.signIn);
  //
  // app.post('/api/todos', usersController.loginRequired, todosController.create);
  // app.get('/api/todos', usersController.loginRequired, todosController.list);
  // app.get('/api/todos/:todoId', usersController.loginRequired, todosController.retrieve);
  // app.put('/api/todos/:todoId', usersController.loginRequired, todosController.update);
  // app.delete('/api/todos/:todoId', usersController.loginRequired, todosController.destroy);
  //
  // app.post('/api/todos/:todoId/items', usersController.loginRequired, todoItemsController.create);
  // app.put('/api/todos/:todoId/items/:todoItemId', usersController.loginRequired, todoItemsController.update);
  // app.delete('/api/todos/:todoId/items/:todoItemId', usersController.loginRequired, todoItemsController.destroy);
  //
  // app.all('/api/todos/:todoId/items', (req, res) =>
  //   res.status(405).send({
  //     message: 'Method Not Allowed'
  //   }));
};
