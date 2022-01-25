import {LitElement, html, css} from "lit"
import {customElement, property} from "lit/decorators.js"

@customElement('fa-icon')
export class FontawesomeIcon extends LitElement {
    _viewBox= ""
    _path = ""
    _icon: any
    
    static styles = css`
        :host {
            display: inline-block;
            position: relative;
            margin: 0;
            padding: 0;
            width: var(--fa-icon-width, 1em);
            height: var(--fa-icon-height, 1em);
        }
        .fa-dl-icon {
            width: 100%;
            height: 100%;            
            overflow: visible;
            display: block;
            margin-bottom: var(--fa-icon-margin-bottom, 0);
        }
        span.badge {
            display: inline-block;
            position: absolute;
            top: -6px;
            right: -12px;
            width: calc(var(--fa-icon-width) * 0.8);
            height: calc(var(--fa-icon-width) * 0.8);
            line-height: calc(var(--fa-icon-width) * 0.8);
            font-family: "Roboto Mono", monospace;
            font-size: x-small;
            border-radius: 50%;
            text-align: center;
            background: var(--primary);
            color: var(--text-on-dark);
        }
    `;

    get icon(): any {
        return this._icon;
    }
    set icon(value: any) {
        this._icon = value
        this.extractIcon()
        this.requestUpdate();
    }
    
    @property({attribute: true})
    counter: string = ""

    extractIcon() {
        this._viewBox = `0 0 ${this._icon.icon[0]} ${this._icon.icon[1]}`
        this._path = this._icon.icon[4];
    }

    render() {
        
        return html`
            <svg aria-hidden="true"
                class="fa-dl-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="${this._viewBox}"
            >
                <path fill="currentColor" d="${this._path}" />
            </svg>
            
            ${this.counter ? 
                html`<span class="badge">${this.counter}</span>` : ""
            }
        `;
    }
}