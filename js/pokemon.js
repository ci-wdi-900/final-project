// Contains all get requests for Poke API
const loadAllBasic = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon-form?limit=151&offset=0")
        .then((response) => response.json())
        .then((data) => data.results);

}
// gets all details for selected pokemon
const getDetail = (pokemon) => {
    return fetch(`${pokemon.url}`)
        .then((response) => response.json())
        .then((data) => data)
}

export {loadAllBasic, getDetail}