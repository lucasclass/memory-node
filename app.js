const express = require('express');
const app = express();

const routeProdutos = require('./routes/produtos');

app.use('/test',(req, res, next) =>
{
  res.status(200).send({
    mensagem: 'Ok, CORRETAMENTE'
  })
})

app.use('/produtos', routeProdutos);

module.exports = app;