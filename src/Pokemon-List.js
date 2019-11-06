import Component from './component.js';
import { PokemonItem } from './Pokemon-Item.js';

export class PokemonList extends Component {

    onRender(dom) {
        const pokemon = (this.props.pokemon);
        
        pokemon.forEach(pokemon => {
            const props = { pokemon };
            const pokemonItem = new PokemonItem(props).renderDOM();
            dom.appendChild(pokemonItem);
        });
    }

    renderHTML() {
        return /*html */`
        <ul class="pokemon-list">
        </ul>
`;
    }
}