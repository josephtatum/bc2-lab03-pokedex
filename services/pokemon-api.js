const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=155';

export async function getPokemon() {
    const response = await fetch(URL);
    return await response.json();
}