class Token {

    static LOGIN_TOKEN_KEY = 'rts-auth-token'

    static getAuthToken():string|null {
        return localStorage.getItem(Token.LOGIN_TOKEN_KEY)
    }

    static setAuthToken(data:string):void {
        localStorage.setItem(Token.LOGIN_TOKEN_KEY,data)
    }

    static removeAuthToken():void {
        localStorage.removeItem(Token.LOGIN_TOKEN_KEY)
    }

    static clearAllTokens():void {
        localStorage.clear()
    }

}

export default Token