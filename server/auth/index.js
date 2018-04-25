import fireadmin from '../firebase';

export function verifyToken(req, res, next) {
  fireadmin.auth().verifyIdToken(req.headers.authorization)
  .then((decodedToken) => {
    const uid = decodedToken.uid;

    next();
  }).catch((error) => {
    console.log('there is an error', error);
    return res.status(401).json({ message: 'Unauthorized User', error: error });
  });
}
