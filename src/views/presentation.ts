import {LitElement, html, css} from "lit"
import {customElement} from "lit/decorators.js"

@customElement('presentation-view')
export class PresentationView extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
        }
    `

    render() {

        return html`
            <h1>Presentation</h1>
        `
    }
}
