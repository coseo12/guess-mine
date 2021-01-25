import express from 'express';
import path from 'path';
import socketIO from 'socket.io';
import morgan from 'morgan';
import socketContriller from './socket-controller';
import events from './events';

const PORT = 4000;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.render('home', { events: JSON.stringify(events) });
});

const handleListening = () => {
  console.log(`✅ Server running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on('connection', socket => socketContriller(socket));
