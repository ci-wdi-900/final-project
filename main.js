import {loadAllBasic, getDetail} from "./pokemon.js";
import {Home} from './home.js';

const app = document.querySelector("#app");
let pkmn = [];

// Pokemon OG

// Loads the initial 151 Pokémon and save them to local storage. If data already exists, existing data will be used instead.
window.addEventListener('load', function () {
    if (window.localStorage.getItem("pokemonData") === null) {
        // Load basic pokemon information
        loadAllBasic()
            .then(data => {
                // Use data from loadAllBasic to query for more detailed information on each pokemon.
                data.forEach(pokemon => {
                    getDetail(pokemon.name)
                        .then(data => {
                            // Add new data to array called pkmn
                            pkmn.push(data);
                            console.log(data);
                        })
                        .catch(err => console.log(err))
                        .finally(() => {
                            console.log(pkmn);
                            // set pkmn to local storage
                            window.localStorage.setItem('pokemonData', JSON.stringify(pkmn))
                        })
                })

            })

            .catch(err => {
                console.log(err);
            })
        // console.log(pokemonData);
    }

    app.innerHTML = Home();
})

// const pokemonData = JSON.parse(window.localStorage.getItem('pokemonData'));
// console.log(Array.isArray(pokemonData));
// pokemonData.map(pokemon => {
//     const newPokemon = document.createElement("div")
//     newPokemon.textContent = pokemon.name;
//     document.querySelector('.screen').append(newPokemon);
// })

/*
* Brainstorm
*
* -- Create modular html5 templates via javascript
* ----
* */