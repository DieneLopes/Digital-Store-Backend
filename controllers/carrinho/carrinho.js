const { application } = require("express");
const { buscarUsuario } = require("../usuario/usuario");

let carrinho = [
  {
    id: "1",
    produto: "Adidas",
    usuario: "1",
    quantidade: 2,
  },
  {
    id: "2",
    produto: "Nike",
    usuario: "2",
    quantidade: 3,
  },
  {
    id: "3",
    produto: "Opanca",
    usuario: "2",
    quantidade: 1,
  },
];

function carrinhos() {
  return carrinho;
}

function carrinhoUsuario(idUsuario) {
  if (!idUsuario) {
    return res.send("Usuario não encontrado").status(400);
  }
  let usuario = buscarUsuario(idUsuario);
  let resultado = carrinho.filter((c) => c.usuario == usuario.id);
  return resultado;
}
function addCarrinho(idUsuario, dados) {
  if (!idUsuario) {
    return res.send("Não existe esse produto").status(400);
  }
  let identificadores = carrinho.map((item) => item.id);
  let novoId = Math.max(...identificadores) + 1;
  let novoItem = {
    id: novoId,
    produto: dados.produto,
    usuario: idUsuario,
    quantidade: dados.quantidade,
  };
  carrinho.push(novoItem);

  return novoItem;
}

function attCarrinho(idProduto, dados) {
  if (!idProduto) {
    res.send.status(400);
  }

  let resultado = carrinho.filter((c) => c.id == idProduto);
  resultado.map((cada) => {
    cada.quantidade = dados.quantidade;
  });

  return resultado;
}

function deletarCarrinho(idProduto) {
  let zerandoOProduto = carrinho.filter((produto) => produto.id == idProduto);

  zerandoOProduto.map((cada) => {
    (cada.id = idProduto),
      (cada.produto = 0),
      (cada.usuario = 0),
      (cada.quantidade = 0);
  });

  return zerandoOProduto;
}

module.exports = {
  carrinhos,
  carrinhoUsuario,
  addCarrinho,
  attCarrinho,
  deletarCarrinho,
};
