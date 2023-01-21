const fs = require("fs");

function promocao() {
  let produtos = JSON.parse(fs.readFileSync( "controllers/produto/produtos.json", "utf8"));
  return produtos.filter((produto) => produtos.indexOf(produto) >= produtos.length - 2).map((produto) => {
      return { ...produto, valorPromocional: produto.valor / 2 };
    });
}

module.exports = {
  promocao,
}