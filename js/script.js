var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

var quadrados = document.getElementsByClassName('quadrado');


mudarJogador(valor = 'X');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador; 
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    
    if(checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        var vencedor = true;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        var vencedor = true;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        var vencedor = true;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        var vencedor = true;
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        var vencedor = true;
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        var vencedor = true;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        var vencedor = true;
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        var vencedor = true;

    } if (quadrado1.innerHTML !== '-' && quadrado2.innerHTML !== '-' && quadrado3.innerHTML !== '-' && quadrado4.innerHTML !== '-' && quadrado5.innerHTML !== '-' && quadrado6.innerHTML !== '-' && quadrado7.innerHTML !== '-' && quadrado8.innerHTML !== '-' && quadrado9.innerHTML !== '-' && vencedor !== true ) {
			var empatou = document.getElementById("Empatou")
   var Empate = empatou
   Empate.innerHTML = "Empatou";
}
    return vencedor;
}


function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}


function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "#0f0";
    quadrado2.style.background = "#0f0";
    quadrado3.style.background = "#0f0";
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var ehigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        ehigual = true;
    }
    return ehigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
	var empatou = document.getElementById("Empatou");
    var Empate = empatou
    Empate.innerHTML = ""; 

    for(var i = 1; i<= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'rgb(217, 207, 207)';
        quadrado.style.color = 'rgb(217, 207, 207)';
        quadrado.innerHTML = '-'

    }
    mudarJogador(valor = 'X');
}
	
