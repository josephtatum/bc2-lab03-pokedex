import Component from './component.js';

export class PokemonItem extends Component {
    
    
    renderHTML() {
        const pokemon = this.props.pokemon;
        
        return /*html */`
        <li class="pokemon-tile" style="background-color: ${pokemon.color_1}; background: linear-gradient(${pokemon.color_1}, ${pokemon.color_2});">
            <img class="pokemon-img" src="${pokemon.url_image}">
            <h2>${pokemon.id}:<br>${pokemon.pokemon}</h2>
        </li>
`;
    }
}