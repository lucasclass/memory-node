const express = require('express');
const router = express.Router();

// retorna todos os pedidos
router.get('/', (req, res, next) =>{
  res.status(200).send({
    mensagem: 'Retorna os pedidos'
  })
});

// insere um pedidos
router.post('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Pedido foi criado'
  })
});

// retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) =>{
  const id = req.params.id_pedido
  
    res.status(200).send({
      mensagem: 'Detalhes do pedido',
      id_pedido: id
    });
  });

// deleta um pedidos
router.delete('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Pedido excluido'
  })
});

module.exports = router;