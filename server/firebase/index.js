import * as admin from 'firebase-admin';

const serviceAccount = require('./firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ornament-mobile-boilerplate.firebaseio.com'
});

export default admin;
