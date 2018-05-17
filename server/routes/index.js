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
  app.post('/api/mail/folders/:folderId/contacts', verifyToken, verifyOwnership, ContactsController.createContact);

  app.all("*", (req, res) => {
    res.status(404).send({
      message: 'Not Found'
    })
  });
};
