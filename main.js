import {loadAllBasic} from "./pokemon.js";
// Pokemon OG

// Loads the initial 151 Pokémon and save them to local storage. If data already exists, existing data will be used instead.
window.addEventListener('load', function () {
    if (window.localStorage.getItem("pokemonData") === null) {
        loadAllBasic()
            .then(data => {
                console.log(data);
                window.localStorage.setItem('pokemonData', JSON.stringify(data));
            })
    }
})
