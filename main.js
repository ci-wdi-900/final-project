import {loadAllBasic, getDetail} from "./pokemon.js";
import {Home} from './home.js';
import {PokemonDetail} from "./pokemonDetail.js";

const app = document.querySelector("#app");
const dpadRight = document.querySelector(".dpad-right");

let pkmn = [];
let current = 0;
// Pokemon OG

// Loads the initial 151 Pokémon and save them to local storage. If data already exists, existing data will be used instead.
window.addEventListener('load', function () {
    console.log("reloaded");
    disableScroll();
    if (window.localStorage.getItem("pokemonData") === null) {
        // Load basic pokemon information
        loadAllBasic()
            .then(data => {
                console.log(data);
                // Use data from loadAllBasic to query for more detailed information on each pokemon.
                data.forEach(pokemon => {
                        console.log(pokemon);
                        getDetail(pokemon)
                            .then(data => {
                                // Add new data to array called pkmn
                                pkmn.push(data);
                                console.log("detail", data);
                            })
                            .catch(err => console.log(err))
                            .finally(() => {
                                console.log(pkmn);
                                // set pkmn to local storage
                                window.localStorage.setItem('pokemonData', JSON.stringify(pkmn))
                            })
                    }
                )

            })
            .catch(err => {
                console.log(err);
            })
        // console.log(pokemonData);
    }
    if (window.localStorage.getItem("pokemonData") !== null) {
        pkmn = JSON.parse(window.localStorage.getItem('pokemonData'));
    }

})


// console.log(pkmn);
app.innerHTML = Home();
window.addEventListener('keydown', function (e) {
    console.log(e.key)

    switch (e.key) {
        case "ArrowUp":
            // app.innerHTML = PokemonDetail(pkmn[current]);
            if (current !== 151) {
                app.innerHTML = "";
                app.append(PokemonDetail(pkmn[current]));
                ++current;
            }
            break;
        case "ArrowDown":
            // if (current !== 0) current--;
            // app.innerHTML = PokemonDetail(pkmn[--current]);
            if (current !== 0) {
                app.innerHTML = "";
                --current
                app.append(PokemonDetail(pkmn[current]));
                // current--;
            }
            break;
    }
})


// dpadRight.addEventListener('click', function () {
//     app.innerHTML = PokemonDetail(pkmn[current]);
//     if (current !== 151) current++;
// })


function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

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