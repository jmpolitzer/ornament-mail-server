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
    return res.status(401).json({ message: 'Unauthorized User', error: error });
  });
}
