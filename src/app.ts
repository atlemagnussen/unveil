import {LitElement, html, css} from "lit"
import {customElement} from "lit/decorators.js"

import "@app/style/vars.css"
import "@app/style/theme.css"
import "@app/style/site.css"

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
	    .controls {
            /* height: 300px;
            width: 500px; */
            background: var(--un-controls-background);
            /* opacity: 0.3; */
            border-radius: 5px;
            color: white;
            padding: 0.5rem;
            /* animation: fadeout 2s; */
            /* animation-fill-mode: forwards; */
            /* animation-delay: 0; */
        }
        
    `    
    
    
    render() {
        return html`
            <header>
                <h1>Hello
            </header>
            
            <main>
                
               <p>Hello</p>
            </main>
            <footer>
                
            </footer>
        `
    }
}