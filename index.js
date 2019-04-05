const PEDRA = 'PEDRA';
const PAPEL = 'PAPEL';
const TESOURA = 'TESOURA';

const ESCOLHAS_VALIDAS = {
    PEDRA,
    PAPEL,
    TESOURA
};

const ESCOLHA_INVALIDA = 'ESCOLHA_INVALIDA';
const ESCOLHA1 = 'ESCOLHA1';
const ESCOLHA2 = 'ESCOLHA2';
const EMPATE = 'EMPATE';

const RESULTADOS = {
    ESCOLHA_INVALIDA,
    ESCOLHA1,
    ESCOLHA2,
    EMPATE
};

const eh_valido = function(escolha1, escolha2){
    return ((ESCOLHAS_VALIDAS[escolha1]) && (ESCOLHAS_VALIDAS[escolha2]));
}

const juiz = function(escolha1, escolha2){

    if (!eh_valido(escolha1, escolha2)) {
        return RESULTADOS.ESCOLHA_INVALIDA;
    }

    if(escolha1 === escolha2){
        return RESULTADOS.EMPATE;
    } else if (escolha1 === TESOURA && escolha2 === PAPEL){
        return RESULTADOS.ESCOLHA1;
    }
      else if (escolha1 === TESOURA && escolha2 === PEDRA){
        return RESULTADOS.ESCOLHA2;
    }
    else if (escolha1 === PEDRA && escolha2 === TESOURA){
        return RESULTADOS.ESCOLHA1;
    }

}

module.exports = { juiz , ESCOLHAS_VALIDAS, RESULTADOS}