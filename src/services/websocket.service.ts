

class WebSocketService {

    private readonly url:string = 'ws://localhost:3000/api/ws';

    private socket:WebSocket = new WebSocket(this.url)

    constructor() {
        console.log('hi',this.socket)
        this.handleError()
        this.handleClose()
    }

    getMessage():Promise<any> {
        return new Promise((resolve:any,reject:any):void => {
            this.socket.onmessage = (e:any):void => this.handleMessage(e,resolve,reject)
        })
    }

    private handleMessage(event:any,resolve:any,reject:any):void {
        console.log('message',event)
        let socket = this.socket
        // setInterval(()=>socket.send('hhhhh'),1000)
    }

    private handleError():void {
        this.socket.onerror = (event:any):void => {
            console.error('websocket error',event)
            this.socket = new WebSocket(this.url)
        }
    }

    private handleClose():void {
        this.socket.onclose = (event:any):void => {
            console.info('websocket connection closed',event)
            this.socket = new WebSocket(this.url)
        }
    }

}

export default new WebSocketService()