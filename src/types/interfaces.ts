interface PresentationAvailability {
    value: boolean
    onchange: () => void
}

type PresentationConnectionState = "closed" | "open"

interface PresentationMessage {
    data: any
}

interface PresentationConnection {
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

