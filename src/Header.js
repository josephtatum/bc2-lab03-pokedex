import Component from './component.js';

export class Header extends Component {
    renderHTML() {
        return /*html */`
        <header>
            <h1 class="pokedex-heading"><a href="../pokedex">pokedex</a></h1>
        </header>
`;
    }
}