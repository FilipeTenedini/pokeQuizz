let pokes = {
    'charmander' : {nome: 'CHARMANDER', classe: 'fogo', img: './assets/images/charmander.png', desc: 'A chama que arde na ponta da cauda é uma indicação das suas emoções. A chama vacila quando Charmander está desfrutando de si mesmo. Se o Pokémon fica furioso, a chama queima ferozmente.'},
    'squirtle' : {nome: 'SQUIRTLE', classe: 'água', img: './assets/images/squirtle.png', desc: 'Squirtle é um dos três Pokémon iniciais de Kanto. É baseado em uma tartaruga marinha. Tem uma pele azul claro, usa um casco e junto também tem uma calda longa azul.'},
    'bulbasaur': {nome: 'BULBASAUR', classe: 'folha', img: './assets/images/bulbasaur.png', desc: 'Bulbasaur é uma criatura quadrúpede réptil que lembra um dinossauro jovem, com um azul-verde manchado. Ele tem três dedos brancos ou garras crescendo fora de suas quatro pernas, e seus olhos são de um vermelho brilhante.'},
    'machop': {nome: 'MACHOP', classe: 'físico', img: './assets/images/machop.png', desc: 'Os músuculos de Machop são especiais, eles nunca se cansam. Não importa quanto ele os use. Este Pokémon tem força suficiente para lançar 100 adultos humanos.'},
    'raichu': {nome: 'RAICHU', classe: 'raio', img: './assets/images/raichu.png', desc: 'Ele é a forma evoluída de Pikachu e a forma final de Pichu.'}    
};

function defPoke() {
    let pokefoto = document.querySelector('.cardWin-fotoPoke');
    let poketxt = document.querySelector('.cardWin-desc--txt');
    let choice = (Math.round(Math.random(1, 5) * 5));
    count = 1;

    for (i in pokes){
        if (count == choice){
            break
        }
        count++

    };

    let pokeEscolhido = pokes[i];
    pokefoto.setAttribute('src', pokeEscolhido.img);
    poketxt.innerHTML = pokeEscolhido.desc;
    return pokeEscolhido;
};


let pokeEscolhido = defPoke();
let boneco = document.querySelectorAll('.parte-boneco');
let palavraMisterio = document.querySelector('.palavraMesmo');
let card = document.querySelector('.bg-color');
let palavra = pokeEscolhido.nome;
let chutesRealizados = [];
let erros = 0;
let errosMax = boneco.length;
mostrarPalavra();


function mostrarPalavra() {
    palavraMostrada = '';

    for (let i = 0; i < palavra.length ; i++) {
        if ( chutesRealizados.includes(palavra[i]) ) {
            palavraMostrada += palavra[i]
        } else if (palavra[i] === ' ') {
            palavraMostrada += ' '
        } else {
            palavraMostrada += '<img src="./assets/images/pokebola.png" alt="" class="pokebola-letra">'
        }

    }
    palavraMisterio.innerHTML = palavraMostrada;
};

function restart() {
    let botaoPlay = document.querySelector('#play')
    let botaoRestart = document.querySelector('#restart')
//CRIAR UM IF PARA TROCAR DE UM BOTÃO PARA OUTRO
    botaoPlay.style.display='none';
    botaoRestart.style.display='flex';
}

function ganhaOuperde(){
    let mostrarPoke = (div) => div.style.display='flex';

    if (palavraMisterio.innerHTML === palavra){        
        let cardWin = document.querySelector('.cardWin');
        mostrarPoke(card);
        mostrarPoke(cardWin);
        restart();
    }
    
    if (erros === errosMax) {
        let cardLose = document.querySelector('.cardLose');
        mostrarPoke(card);
        mostrarPoke(cardLose);
    }
};

function chutarLetra() {
    let chute = prompt('Digite uma letra:');

    if (chutesRealizados.includes(chute.toUpperCase())){
        alert('Você já tentou essa letra');
    } else {        
        chutesRealizados.push(chute.toUpperCase());

        if (palavra.includes(chute.toUpperCase())) {
            mostrarPalavra();
        } else { 
            boneco[erros].classList.add('mostrarimg');
            erros += 1;
        }
    }
    
    ganhaOuperde();
};

let fecharCard = () => card.style.display='none';

function restartGame() {
    let boneco = Array.from(document.querySelectorAll('.parte-boneco'));    
    boneco.map(function(elemento){
        elemento.classList.remove('mostrarimg')
    })

    erros = 0;
    chutesRealizados = []
    pokeEscolhido = defPoke();
    palavra = pokeEscolhido.nome
    mostrarPalavra();
};
