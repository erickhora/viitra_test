const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

const app = express();

const tweetRoutes = require('./routes/tweetRoutes');

const sequelize = new Sequelize('viitra_test', 'erick', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', tweetRoutes);

app.listen('3000', () => {
    console.log('Servidor conectado na porta 3000...');
});