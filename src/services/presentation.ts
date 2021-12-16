import { BehaviorSubject } from "rxjs"

const presentationReadySubject = new BehaviorSubject<boolean>(false)
export const presentationReady = presentationReadySubject.asObservable()

const setPresentationReady = (val: boolean) => {
    presentationReadySubject.next(val)
}

const presUrls = ["https://unveil.web.app/presentation.html"]

//@ts-ignore
const request = new PresentationRequest(presUrls)
request.getAvailability().then((availability: PresentationAvailability) => {
    setPresentationReady(availability.value);
    availability.onchange = function() { setPresentationReady(this.value) }
})

export const startPresentation = async () => {
    const connection = await request.start()
    setConnection(connection)
}

let connection: PresentationConnection | null = null

function setConnection(newConnection: PresentationConnection) {
    if (connection && connection != newConnection && connection?.state != 'closed') {
        connection.onclosed = undefined
        connection.close()
    }

    connection = newConnection;
    localStorage["presId"] = connection.id;


    // Monitor the connection state
    connection.onconnect = () => {

        connection!.onmessage = message => {
            console.log(`Received message: ${message.data}`);
        }

        connection?.send("Say hello");
    }

    connection!.onclose = () => {
        connection = null
    }

    connection!.onterminate = () => {
      // Remove presId from localStorage if exists
      delete localStorage["presId"];
      connection = null;
    }
}