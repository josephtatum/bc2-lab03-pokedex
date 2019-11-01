import { Header } from './Header.js';

const header = new Header().renderDOM();
document.body.prepend(header);