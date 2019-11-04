import Component from './component.js';

export class Pagination extends Component {

    onRender(dom) {
        const previousPage = dom.querySelector('.previous-page');
        const nextPage = dom.querySelector('.next-page');

        if (!previousPage) {
            return;
        }

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            
            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            }
            else {
                page = parsedPage;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        previousPage.addEventListener('click', () => {
            updatePage(-1);
        });

        nextPage.addEventListener('click', () => {
            updatePage(1);
        });

    }

    renderHTML() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        const totalResults = this.props.totalResults;
        console.log(totalResults)
        let page = 1;
      
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            page = 1;
        }
        else {
            page = parsedPage;
        }
        return /*html */`
        <nav class="pagination">
            <button class="previous-page" style="display: ${page === 1 ? 'none' : ''}" ${page === 1 ? 'disabled' : ''}><img class="left-arrow" src="../assets/arrow.svg" alt="previous-page"></button>
            <span class="current-page">${page}</span> of <span class="total-pages">30</span>
            <button class="next-page"><img class="right-arrow" src="../assets/arrow.svg" alt="next-page"></button>
        </nav>
`;
    }
}
