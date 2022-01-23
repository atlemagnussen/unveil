// this.dom.median.addEventListener("pointerdown", this.pointerdown)

import {LitElement, html, css} from "lit"
import {customElement, property} from "lit/decorators.js"
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('widget-editor')
export class WidgetEditor extends LitElement {
    static styles = css`
        :host {
            display: block;
            background: green;
            border: solid 1px white;
            box-sizing: border-box;
            resize: both;
        }
    `

    @property({attribute: false})
    widget: Widget = {
        id: "",
        width: 10,
        height: 10,
        html: ""
    }

    render() {
        this.style.width = `${this.widget.width}px`
        this.style.height = `${this.widget.height}px`
        this.setAttribute("width", `${this.widget.width}`)
        this.setAttribute("height", `${this.widget.height}`)
        return html`
            ${unsafeHTML(this.widget.html)}
        `
    }
}

// use this for resize handler
// <mwc-fab mini class="close-btn" 
//         icon="close"
//         on:click={closeDlg}>
//     </mwc-fab>