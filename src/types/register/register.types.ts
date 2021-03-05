import Test from '../../redux/actions/Test'

import AuthAction from '../../redux/actions/auth/auth.action'

import type { ApiResponse } from '../common.types'

interface RegisterFormDataType {
    email:string;
    password:string;
}

interface RegisterInitialStateType {
    count:number;
}

interface RegisterActionType {
    type: Test;
}

interface AuthActionType {
    type: AuthAction,
    data: RegisterApiResponseDataType
}

interface RegisterApiResponseDataType {
    code:number;
    message:string;
    data:any;
}

interface AuthInitialStateType {
    register?:ApiResponse;
    login?:ApiResponse;
}

export type {
    RegisterFormDataType,
    RegisterInitialStateType,
    RegisterActionType,
    AuthActionType,
    AuthInitialStateType,
    RegisterApiResponseDataType
}