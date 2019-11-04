import Component from './Component.js';
import { Header } from './Header.js';
import { Pagination } from './Pagination.js';
import { PokemonList } from './Pokemon-List.js';
import { Footer } from './Footer.js';
import { getPokemon } from '../services/pokemon-api.js';

export class Pokedex extends Component {

    async onRender(dom) {
        const header = new Header().renderDOM();
        dom.appendChild(header);

        const pagination = new Pagination().renderDOM();
        dom.appendChild(pagination);

        const pokemonList = new PokemonList({ pokemon: [] });
        const domPokemonList = pokemonList.renderDOM();
        dom.appendChild(domPokemonList);

        const response = await getPokemon();
        const pokemon = response.results;

        pokemonList.update({ pokemon: pokemon });

        const footer = new Footer().renderDOM();
        dom.appendChild(footer);
    }

    renderHTML() {
        return /*html*/`
        <div class="page-wrapper">
        </div>
        `;
    }
}

const app = new Pokedex();
const dom = app.renderDOM();
document.body.prepend(dom);