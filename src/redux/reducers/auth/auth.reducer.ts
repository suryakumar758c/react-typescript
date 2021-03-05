import AuthAction from "../../actions/auth/auth.action"

import type { 
    AuthInitialStateType,
    AuthActionType
} from '../../../types/register/register.types'

const authInitialState:AuthInitialStateType = {
    register: {
        code:0,
        message:'',
        data:null
    },
    login: {
        code:0,
        message:'',
        data:null
    }
}

const AuthReducer = (state:AuthInitialStateType = authInitialState,action:AuthActionType):AuthInitialStateType => {

    switch(action.type) {

        case AuthAction.REGISTER:
            return {
                register:action.data
            }

        case AuthAction.LOGIN:
            return {
                login:action.data
            }

        default:
            return state

    }

} 

export default AuthReducer