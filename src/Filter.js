import Component from './component.js';

export class Filter extends Component {
    
    onRender(form) {
        const nameSearch = form.querySelector('#name-search');
        const numberSearch = form.querySelector('#number-search');
        const typeSearch = form.querySelector('#type-search');

        

        function updateControls() {
            const queryString = '';
            const searchParams = new URLSearchParams(queryString);

            nameSearch.value = searchParams.get('s') || '';
            numberSearch.value = searchParams.get('number') || '';
            typeSearch.value = searchParams.get('type') || '';
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', () => {
            event.preventDefault();
            const formData = new FormData(form);
            let queryString;
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('page', 1);
            if (nameSearch.value) {
                searchParams.set('pokemon', formData.get('name'));
            }
            
            if (numberSearch.value) {
                searchParams.set('id', formData.get('number'));
            }

            if (typeSearch.value) {
                searchParams.set('type', formData.get('type'));
            }
            
            window.location.hash = searchParams.toString();

        });


    }

    renderHTML() {
        return /*html */`
            <form class="search-form filter-nav">
                <input type="search" id="name-search" name="name" placeholder="pokemon name" class="searchbox">
                <input type="search" id="number-search" name="number" placeholder="number" class="numberbox">
                <select name="type" class="typefilter" id="type-search">
                    <option value="">all types</option>
                    <option value="psychic">psychic</option>
                </select>
                <button class="search-button">search</button>
            </form>
`;
    }
}