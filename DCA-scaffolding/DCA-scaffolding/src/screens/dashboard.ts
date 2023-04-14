import { getData } from '../services/getData';

class Dashboard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback() {
        const data = await getData();
        this.render(data)
    }

    render(data:any) {
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        data.forEach(() => {})
    }
}

customElements.define('app-dashboard', Dashboard);