import { default as SIB } from '../index';

const ContactsApi = new SIB.ContactsApi();

module.exports = {
  createFolder(req, res) {
    const body = {
      name: req.user.user_id
    };

    ContactsApi.createFolder(body)
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
  },

  getFolderLists(req, res) {
    ContactsApi.getFolderLists(req.params.folderId)
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
  },

  createList(req, res) {
    const body = {
      name: req.body.name,
      folderId: parseInt(req.params.folderId, 10)
    };

    ContactsApi.createList(body)
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
  },

  deleteList(req, res) {
    ContactsApi.deleteList(req.params.listId)
    .then(() => res.status(201).send({ success: true }))
    .catch(error => res.status(400).send(error));
  },

  updateList(req, res) {
    ContactsApi.updateList(req.params.listId, req.body)
    .then(() => res.status(201).send({ success: true }))
    .catch(error => res.status(400).send(error));
  }
}
