const index = require('./index.js')
const assert = require('assert')

// As regras são as seguintes:
// Pedra empata com Pedra e ganha de Tesoura OK
// Tesoura empata com Tesoura e ganha de Papel OK
// Papel empata com Papel e ganha de Pedra


it('Escolhas Invalidas', () => {
  let escolha = 'PATATI';
  assert.equal(index.juiz(escolha, escolha), index.RESULTADOS.ESCOLHA_INVALIDA);
});

 it('Pedra empata com Pedra', () => {
   let escolha = index.ESCOLHAS_VALIDAS.PEDRA;
   assert.equal(index.juiz(escolha, escolha), index.RESULTADOS.EMPATE);
 });

 it('Pedra ganha de Tesoura', () => {
  let escolha1 = index.ESCOLHAS_VALIDAS.PEDRA;
  let escolha2 = index.ESCOLHAS_VALIDAS.TESOURA;
  assert.equal(index.juiz(escolha1, escolha2), index.RESULTADOS.ESCOLHA1);
});

it('Tesoura perde de Pedra', () => {
  let escolha1 = index.ESCOLHAS_VALIDAS.TESOURA;
  let escolha2 = index.ESCOLHAS_VALIDAS.PEDRA;
  assert.equal(index.juiz(escolha1, escolha2), index.RESULTADOS.ESCOLHA2);
});

it('Tesoura empata com Tesoura', () => {
  let escolha = index.ESCOLHAS_VALIDAS.TESOURA;
  assert.equal(index.juiz(escolha, escolha), index.RESULTADOS.EMPATE);
});

it('Tesoura ganha de Papel', () => {
 let escolha1 = index.ESCOLHAS_VALIDAS.TESOURA;
 let escolha2 = index.ESCOLHAS_VALIDAS.PAPEL;
 assert.equal(index.juiz(escolha1, escolha2), index.RESULTADOS.ESCOLHA1);
});

