// import {general} from "./alerts";
// export function PokemonDetail(pokemon) {
//     console.log(this);
//     return `
//     <div id="pokemonDetail">
//     <header>${pokemon.name}</header>
//     <img src=${pokemon.sprites.front_default} alt="">
//     <nav>
//     <a href="#" id="addButton">ADD TO POKEDEX</a>
//     <a href="#" id="viewButton">VIEW POKEDEX</a>
// </nav>
//
// </div>
//     `
// }

export function PokemonDetail(pokemon) {

    const container = document.createElement("div");
    container.setAttribute('id', 'pokemonDetail');

    const header = document.createElement("header");
    header.textContent = pokemon.name;

    const pokemonImage = new Image();
    pokemonImage.src = pokemon.sprites.front_default;

    const nav = document.createElement("nav");

    const addButton = document.createElement('a');
    addButton.setAttribute('href', "#");
    addButton.textContent = "ADD TO POKEDEX";
    addButton.addEventListener('click', function () {
        console.log('addButton');
        container.appendChild(generalAlert("success", `${pokemon.name} has been added to the pokedex`));
    })

    const viewButton = document.createElement('a');
    viewButton.setAttribute("href", "#");
    viewButton.textContent = "VIEW POKEDEX";
    viewButton.addEventListener('click', function () {
        console.log('viewButton');
    })
    nav.appendChild(addButton);
    nav.appendChild(viewButton);
    container.appendChild(header);
    container.appendChild(pokemonImage);
    container.appendChild(nav);

    return container;


}

function generalAlert(type, message) {
    const types = ["success", "error"];
    try {
        if (!types.includes(type)) {
            console.log(typeof type);
            throw new Error();
        }
        const alertContainer = document.createElement("div");
        alertContainer.classList.add("alert");
        const alertMessage = document.createElement('p');
        alertMessage.textContent = message;
        switch (type) {
            case "ERROR":
                alertMessage.classList.add("error");
                break;
            case "SUCCESS":
                alertMessage.classList.add("success");
                break;
        }
        alertContainer.appendChild(alertMessage);
        const alertConfirm = document.createElement('a');
        alertConfirm.setAttribute("href", "#");
        alertConfirm.textContent = "OK";
        alertConfirm.addEventListener('click', function (e) {
            alertContainer.remove();
        })
        alertContainer.appendChild(alertConfirm);

        return alertContainer;
    } catch (err) {
        console.log(err)
    }

}

