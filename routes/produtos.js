const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
  res.status(200).send({
    mensagem: 'Usando o GET de PRODUTOS'
  })
});

router.post('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Usando POST de PRODUTOS'
  })
});

router.get('/:id_produto', (req, res, next) =>{
  
})

module.exports = router;