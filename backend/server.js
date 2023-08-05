const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { PORT, DB_URL } = require('./config/config.js');
const errorHandler = require('./errorHandler/globalHandler.js');
const requestLogger = require('./middleware/requestLogger.js');

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('MongoDB Conected!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());

app.use(requestLogger);
app.use(express.json());

app.use('/api', require('./routes/index.js'));
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Cao sa servera');
});

app.listen(PORT, () => {
  console.log('Server je pokrenut na portu 4000');
});
