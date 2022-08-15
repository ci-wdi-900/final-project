export function PokemonDetail(pokemon){
    return `
    <div id="pokemonDetail">
    <header>${pokemon.name}</header>
    <img src=${pokemon.sprites.front_default} alt="">
    <a href="#">ADD TO POKEDEX</a>
</div>
    `
}