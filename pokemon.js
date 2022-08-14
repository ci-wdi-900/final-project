
// Contains all get requests for Poke API
 const loadAllBasic = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then((response) => response.json())
        .then((data) => data.results);

}
// gets all details for selected pokemon
 const getDetail = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => data.results)
}

export {loadAllBasic, getDetail}