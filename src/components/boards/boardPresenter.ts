import {LitElement, html, css} from "lit"
import {customElement, property} from "lit/decorators.js"

@customElement('board-presenter')
export class BoardView extends LitElement {
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

    @property({attribute: false})
    board: Board = {
        id: "",
        widgets: []
    }

    render() {
        return html`
            <div class="content">
                <p>Board-view</p>
                ${this.board.id}
            </div>
        `
    }
}
