import {LitElement, html, css} from "lit"
import {customElement} from "lit/decorators.js"

import "@app/style/vars.css"
import "@app/style/theme.css"
import "@app/style/site.css"
import "@app/views"

import { gotoPath } from "./routing/router"

@customElement('main-app')
export class MainAppComponent extends LitElement {
    selected = ""
    static styles = css`
        :host {
            background: var(--un-main-background);
		    display: grid;
		    grid-template-rows: 1fr auto;
		    box-sizing: border-box;
            height: 100%;
            width: 100%;
		    min-height: 100%;
	    }
	    header {
            opacity: 0;
		    position: absolute;
            /* z-index: -1; */
            left: 0;
            top: 100px;
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
		    justify-content: center;
		    align-items: center;
            height: 300px;
	    }
        header:hover {
            opacity: 1;
            z-index: 10;
        }
        main {
            background: var(--un-main-background);
            display: grid;
		    grid-template-rows: 1fr auto;
        }
        footer {
            display: flex;
            flex-direction: column;
		    justify-content: flex-start;
		    align-items: center;
        }
    `

    render() {
        return html`
            <header>
                <h1>Hello</h1>
            </header>
            
            <main>
                
                
                
            </main>
            <footer>
                
            </footer>
        `
    }
}

gotoPath(window.location.pathname)