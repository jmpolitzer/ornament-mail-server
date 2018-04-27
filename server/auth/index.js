import * as R from 'ramda';
import fireadmin from '../firebase';

export function verifyToken(req, res, next) {
  fireadmin.auth().verifyIdToken(req.headers.authorization)
  .then((decodedToken) => {
    const user = R.pick(['user_id', 'email'], decodedToken);
    req.user = user;

    next();
  }).catch((error) => {
    console.log('there is an error', error);
    return res.status(404).json({ message: 'Not Found' });
  });
}

export function verifyOwnership(req, res, next) {
  fireadmin.firestore().collection('users').where('authId', '==', req.user.user_id)
  .get()
  .then((snapshot) => {
    const mailId = snapshot.docs[0].get('mailId');
    const folderIdParam = parseInt(req.params.folderId, 10);

    if(mailId === folderIdParam) {
      next()
    } else {
      return res.status(404).json({ message: 'Not Found' });
    }
  });
}
