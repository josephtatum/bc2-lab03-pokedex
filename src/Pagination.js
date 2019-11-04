import Component from './component.js';

export class Pagination extends Component {
    renderHTML() {
        return /*html */`
        <nav class="pagination"><img class="left-arrow" src="../assets/arrow.svg" alt="previous-page"><span class="current-page">1</span> of <span class="total-pages">30</span><img class="right-arrow" src="../assets/arrow.svg" alt="next-page"></nav>
`;
    }
}
