import Component from './component.js';

export class Footer extends Component {
    renderHTML() {
        return /*html */`
        <footer>
            <nav>1 of 30<span class="next-page"><img class="right-arrow" src="../assets/arrow.svg"</span></nav>
        </footer>
`;
    }
}