# Boilerplate for SendInBlue Mail Server API

Getting Started:

1. Create a SendInBlue account and add your v3 API key to `sample-config.js`.

2. Rename `sample-config.js` to `config.js`.

3. `npm install`

4. `npm install -g sequelize sequelize-cli mysql2`

5. Start mysql with `mysqld` (`sudo mysqladmin shutdown` kills the instance)

6. `sequelize db:create`

7. `sequelize db:migrate`

8. `npm start`
