import Component from './component.js';

export class Header extends Component {
    renderHTML() {
        return /*html */`
        <header>
        <h1>Pokedex</h1>
        <nav class="filter-nav">
            <input type="search" name="pokemon name search" placeholder="pokemon name" class="searchbox">
            <input type="search" name="pokemon number search" placeholder="number" class="numberbox">
            <select name="pokemon type filter" class="typefilter">
                <option value="">all types</option>
                <option value="psychic">psychic</option>
            </select>
        </nav>
    </header>
`;
    }
}