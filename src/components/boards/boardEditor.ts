import {LitElement, html, css} from "lit"
import {customElement, property} from "lit/decorators.js"

@customElement('board-editor')
export class BoardEditor extends LitElement {
    static styles = css`
        :host {
            display: grid;
		    grid-template-rows: auto 1fr;
		    box-sizing: border-box;
            height: 100%;
            width: 100%;
		    min-height: 100%;
        }
        .content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    `

    @property({attribute: false})
    board: Board = {
        id: "",
        widgets: []
    }

    render() {
        return html`
            <header>
            <p>Board-view</p>
                ${this.board.id}
            </header>
            <section>
                <div class="content">
                    ${this.board.widgets.map(w => {
                        return html`<widget-editor .widget=${w}></widget-editor>`
                    })}
                </div>
            </section>
        `
    }
}
