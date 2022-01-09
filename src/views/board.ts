import {LitElement, html, css} from "lit"
import {customElement, property} from "lit/decorators.js"
import { resolvePromise } from "@app/directives/ResolvePromise"
import { getBoard } from "@app/data/dummyBoard"
@customElement('board-view')
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

    @property({attribute: true})
    param = ""

    async getBoard() {
        const board = await getBoard(this.param)
        return board
    }
    render() {
        if (!this.param)
            return html`<p>No board id</p>`

        return html`
            ${resolvePromise(this.getBoard(), this.renderBoard)}
        `
    }
    renderBoard(board: Board) {
        return html`<board-presenter .board=${board}></board-presenter>`
    }
}
