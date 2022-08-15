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


