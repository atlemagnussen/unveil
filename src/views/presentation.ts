import {LitElement, html, css} from "lit"
import {customElement} from "lit/decorators.js"

@customElement('presentation-view')
export class PresentationView extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
        }
        .content {
            display: flex;
            flex-direction: column;
		    justify-content: flex-start;
		    align-items: center;
        }
    `

    render() {

        return html`
            <div class="content">
                <h1>Presentation</h1>
            </div>
        `
    }
}
