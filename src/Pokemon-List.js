import Component from './component.js';
import { PokemonItem } from './Pokemon-Item.js';

export class PokemonList extends Component {

    onRender(dom) {
        const pokemon = (this.props.pokemon).sort(function (a, b) {
            return a.id - b.id || a.name.localeCompare(b.name);
        });
        
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