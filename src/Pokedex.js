import Component from './Component.js';
import { Header } from './Header.js';
import { Filter } from './Filter.js';
import { Pagination } from './Pagination.js';
import { PokemonList } from './Pokemon-List.js';
import { Footer } from './Footer.js';
import { getPokemon } from '../services/pokemon-api.js';

export class Pokedex extends Component {

    async onRender(dom) {
        const header = new Header().renderDOM();
        dom.appendChild(header);

        const filters = new Filter().renderDOM();
        header.appendChild(filters);

        const pagination = new Pagination({ totalResults: 0 })
        const domPagination = pagination.renderDOM();
        dom.appendChild(domPagination);

        const pokemonList = new PokemonList({ pokemon: [] });
        const domPokemonList = pokemonList.renderDOM();
        dom.appendChild(domPokemonList);

        async function loadPokemon() {
            const response = await getPokemon();
            const pokemon = response.results;
            const count = response.count;
            console.log(count)
            pagination.update({ totalResults: count });
            pokemonList.update({ pokemon: pokemon });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });

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