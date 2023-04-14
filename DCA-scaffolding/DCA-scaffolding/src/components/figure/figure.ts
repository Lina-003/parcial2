export enum AttributeFigure {
    "joke" = "joke"
}

export default class Figure extends HTMLElement {
    joke?: string;
    
    static get observedAttributes() {
        const attrs: Record <AttributeFigure, null> = {
            joke: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback (
        propName: AttributeFigure,
        _: unknown,
        newValue: string ) {
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <section>
                <h1>${this.joke}</h1>
                </section>
            `;
        }
    }
}

customElements.define('app-figure', Figure);
