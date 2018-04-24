import { default as SIB } from '../init';

const AccountApi = new SIB.AccountApi();

module.exports = {
  getAccount(req, res) {
    AccountApi.getAccount()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
  }
}
