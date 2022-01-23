import type {ReactiveControllerHost, LitElement} from "lit"

export class ResizeController {
    private host: LitElement
    private observer: ResizeObserver
    constructor(host: LitElement) {
        this.host = host
        host.addController(this)
        this.observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                if(entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize
                    console.log(contentBoxSize)
                } else {
                    const ts = entry.contentRect
                    console.log(ts)
                }
            }
          
            console.log('Size changed')
        })
    }

    setup() {
        this.observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                if(entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize
                } else {
                    const ts = entry.contentRect
                }
            }
          
            console.log('Size changed')
        })
    }
    hostConnected() {
        this.observer.observe(this.host)
    }

    hostDisconnected() {
        this.observer.disconnect()
    }
}
