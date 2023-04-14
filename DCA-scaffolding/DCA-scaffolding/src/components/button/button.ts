export enum AttributeButton {
    "animal" = "animal",
    "career" = "career",
    "celebrity" = "celebrity",
    "dev" = "dev",
    "explicit" = "explicit",
    "fashion" = "fashion",
    "food" = "food",
    "history" = "history",
    "money" = "money",
    "movie" = "movie",
    "music" = "music",
    "political" = "political",
    "religion" = "religion",
    "science" = "science",
    "sport" = "sport",
    "travel" = "travel"
}

export default class Button extends HTMLElement {
    animal?: string;
    career?: string;
    celebrity?: string;
    dev?: string;
    explicit?: string;
    fashion?: string;
    food?: string;
    history?: string;
    money?: string;
    movie?: string;
    music?: string;
    political?: string;
    religion?: string;
    science?: string;
    sport?: string;
    travel?: string;

    static get observedAttributes() {
        const attrs: Record <AttributeButton, null> = {
            animal: null,
            career: null,
            celebrity: null,
            dev: null,
            explicit: null,
            fashion: null,
            food: null,
            history: null,
            money: null,
            movie: null,
            music: null,
            political: null,
            religion: null,
            science: null,
            sport: null,
            travel: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback (
        propName: AttributeButton,
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
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
    }
}

customElements.define('app-button', Button);