import type { RegisterFormDataType, RegisterApiResponseDataType } from "../../../types/register/register.types" 

import type { LoginFormDataType, LoginApiResponseDataType } from "../../../types/login/login.types" 

import Token from "../../../helpers/token.helper"

import AuthService from "../../../services/auth.service"

export default class AuthAction {

    static REGISTER:string = 'Register'

    static LOGIN:string = 'Login'

    static register(data:RegisterFormDataType) {
        return async (dispatch:any):Promise<any> => {

            try {
                const responseData:any = await AuthService.register(data)
                const response:RegisterApiResponseDataType = responseData?.data
                dispatch({
                    type: AuthAction.REGISTER,
                    data: response
                })
            } catch(e) {
                console.error('register exception',e)
            }

        }
    }

    static login(data:LoginFormDataType) {
        return async (dispatch:any):Promise<any> => {

            try {
                const responseData:any = await AuthService.login(data)
                const response:LoginApiResponseDataType = responseData?.data

                console.log(response)
                if(response.code === 200)
                    Token.setAuthToken(response.data.token)

                dispatch({
                    type: AuthAction.LOGIN,
                    data: response
                })
            } catch(e) {
                console.error('login exception',e)
            }

        }
    }

}