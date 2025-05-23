const express = require('express');
const router = express.Router();

// retorna todos os produtos
router.get('/', (req, res, next) =>{
  res.status(200).send({
    mensagem: 'Retorna todos os produtos'
  })
});

// insere um produto
router.post('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Insere um produto'
  })
});

// retorna os dados de um produto
router.get('/:id_produto', (req, res, next) =>{
  const id = req.params.id_produto
  
  if (id === 'especial') {
    res.status(200).send({
      mensagem: 'Voce descobriu o ID especial',
      id: id
    });
  } else {
    res.status(200).send({
      mensagem: 'Usando o GET de um produto exlusivo',
      id: id
    })
  }
})

// altera um produto
router.patch('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Produto alterado'
  })
});

// deleta um produto
router.delete('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Produto excluido'
  })
});

module.exports = router;