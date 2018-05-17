import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;

app.set('port', port);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
