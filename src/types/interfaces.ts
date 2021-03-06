interface PresentationAvailability {
    value: boolean
    onchange: () => void
}

type PresentationConnectionState = "closed" | "open" | "connecting" | "connected"

interface PresentationMessage {
    data: any
}

interface PresentationConnection {
    binaryType: string
    id: string
    state: PresentationConnectionState
    onconnect: () => void
    onclosed?: () => void
    onclose?: () => void
    onterminate: () => void
    close: () => void
    onmessage: (msg: PresentationMessage) => void
    send: (msg: string) => void
}

interface BrowserRoute {
    path: string
    param: string
    action: string
}
interface Route {
    path: string
    component: string
    title?: string
    description?: string
    param?: string
    action?: string
    mustBeLoggedIn?: boolean
    admin?: boolean
    init?: Function
}

interface Board {
    id: string
    widgets: Widget[]
}
interface Widget {
    id: string
    width: number
    height: number
    html: string
}