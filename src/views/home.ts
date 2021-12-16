import {LitElement, html, css} from "lit"
import {customElement} from "lit/decorators.js"

import { observe } from "@app/directives/ObservableDirective"
import { presentationReady, startPresentation } from "@app/services/presentation"

@customElement('home-view')
export class HomeView extends LitElement {
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

    doRender(ready: boolean) {
        if (ready) {
            return html`
                <button @click=${startPresentation}>Connect</button>
            `
        }
        return html`<span>not ready</span>`
    }

    render() {

        return html`
            <div class="content">
                <p>Hello</p>
                ${observe(presentationReady, this.doRender)}
            </div>
        `
    }
}
