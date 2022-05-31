
const ulPrincipal = document.getElementById('listaPokedex')


//criando card

function criarCard(array){

    let liPokemon   = document.createElement('li')
    let imagemPoke  = document.createElement('img')
    let nome        = document.createElement('span')
    let tipo        = document.createElement('p')
    let tipoDois    = document.createElement('p')
    let numero      = document.createElement('p')

    let nomePokemon     = array.name
    let numeroPokemon   = array.order
    let tipoPokemon     = array.types[0].type.name
    /* let tipoPokemonDois = array.types[1].type.name */
    let imagem          = array.sprites.front_default

    imagemPoke.src                = `${imagem}`
    nome.innerHTML                = nomePokemon[0].toUpperCase() + nomePokemon.substring(1)
    numero.innerHTML              = `Dex nº: ${numeroPokemon}`

    if(tipoPokemon.toLowerCase() == 'grass'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#69d0b3'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'fire'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#ff8482'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'water'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#294380'
        tipo.style.color = '#FFFFFF'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'bug'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#becb7c'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'normal'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#d8ccb2'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'electric'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#fff538'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'ground'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#705647'
        tipo.style.color = '#FFFFFF'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'poison'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#c97ba5'
        tipo.style.color = '#FFFFFF'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'ghost'){
        tipo.innerHTML                = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#726c81'
        tipo.style.color = '#FFFFFF'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'psychic'){
        tipo.innerHTML        = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#fe958f'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'dragon'){
        tipo.innerHTML        = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#b8faff'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'rock'){
        tipo.innerHTML        = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#bda372'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }else if(tipoPokemon.toLowerCase() == 'fairy'){
        tipo.innerHTML        = tipoPokemon[0].toUpperCase() + tipoPokemon.substring(1)
        tipo.style.background = '#eb9d8d'
        tipo.style.padding = '0.5rem'
        tipo.style.borderRadius = '7px'

    }
    
    /* tipoDois.innerHTML            = tipoPokemonDois */

    numero.id = 'numeroDex'
    liPokemon.id = 'cardPokemon'
    liPokemon.append(imagemPoke, nome, tipo, numero)
    ulPrincipal.append(liPokemon)
    return liPokemon
}

//variável para invocar API
const fetchPokemon = () => {

    //variavel para captar url de requisição da API
    //nesse caso a template string está recebendo o ID dinâmico do loop
    const getPokemonUrl =  id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokePromises = []
    
    for(let i = 1; i <= 151; i++){
        //cria uma promisses adicionando o id ao final da url
        pokePromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        
    }
    //função que permite que os chamados assincronos seja feito em paralelo quando a promisse
    //da varíavel estiver resolvida

    Promise.all(pokePromises).then(pokemons => {
        let listaPokemons = pokemons
        listaPokemons.forEach((element) => {criarCard(element)})
    })
}

console.log(fetchPokemon())



