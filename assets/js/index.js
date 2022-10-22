let pokes = {
    'charmander' : {nome: 'CHARMANDER', classe: 'fogo', img: './assets/images/charmander.png', desc: 'A chama que arde na ponta da cauda é uma indicação das suas emoções. A chama vacila quando Charmander está desfrutando de si mesmo. Se o Pokémon fica furioso, a chama queima ferozmente.'},
    'squirtle' : {nome: 'SQUIRTLE', classe: 'água', img: './assets/images/squirtle.png', desc: 'Squirtle é um dos três Pokémon iniciais de Kanto. é baseado em uma tartaruga marinha. Tem uma pele azul claro e usa um casco e junto também tem uma calda longa azul.'},
    'bulbasaur': {nome: 'BULBASAUR', classe: 'folha', img: './assets/images/bulbasaur.png', desc: 'Bulbasaur é uma criatura quadrúpede réptil que lembra um dinossauro jovem, com um azul-verde manchado. Ele tem três dedos brancos ou garras crescendo fora de suas quatro pernas, e seus olhos são de um vermelho brilhante.'},
    'machop': {nome: 'MACHOP', classe: 'físico', img: './assets/images/machop.png', desc: 'Os músuculos de Machop são especiais—eles nunca se cansam, não importa quantoe ele use. Este Pokémon tem força suficiente para lançar 100 adultos humanos.'},
    'raichu': {nome: 'RAICHU', classe: 'raio', img: './assets/images/raichu.png', desc: 'Ele é a forma evoluída de Pikachu quando entra em contato com a Thunder Stone e também a forma final de Pichu.'}    
}

function defPoke() {
    let pokefoto = document.querySelector('.cardWin-fotoPoke')
    let poketxt = document.querySelector('.cardWin-desc--txt')
    let choice = (Math.round(Math.random(1, 5) * 5))
    count = 1

    for (i in pokes){
        if (count == choice){
            break
        }
        count++

    }

    let pokeEscolhido = pokes[i]
    pokefoto.setAttribute('src', pokeEscolhido.img)
    poketxt.innerHTML = pokeEscolhido.desc
    return pokeEscolhido
}

let pokeEscolhido = defPoke();

let boneco = document.querySelectorAll('.parte-boneco');
let palavraMisterio = document.querySelector('.palavraMesmo');
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
}


function chutarLetra() {
    let chute = prompt('Digite uma letra:');

    if (chutesRealizados.includes(chute.toUpperCase())){
        alert('Você já tentou essa letra')
    } else {        
        chutesRealizados.push(chute.toUpperCase())

        if (palavra.includes(chute.toUpperCase())) {
            mostrarPalavra();
        } else { 
            boneco[erros].classList.add('mostrarimg')
            erros += 1
        }
    }


    if (palavraMisterio.innerHTML === palavra){
        let card = document.querySelector('.bg-color')
        let mostrarPoke = (div) => div.style.display='flex';
        mostrarPoke(card);
    }
    
    if (erros === errosMax) {
        // mostrar img loser
    }
}
