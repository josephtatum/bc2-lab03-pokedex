import Component from './component.js';

export class PokemonItem extends Component {
    
    
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html */`
        <li class="pokemon-tile">
            <img class="pokemon-img" src="${pokemon.url_image}">
            <h2>${pokemon.id}:<br>${pokemon.pokemon}</h2>
        </li>
`;
    }
}