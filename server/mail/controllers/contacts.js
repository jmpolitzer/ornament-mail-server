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

  getFolder(req, res) {
    ContactsApi.getFolder(req.user.user_id)
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
  }
}
