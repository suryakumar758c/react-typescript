import type { EffectCallback } from 'react'

import Test from '../../redux/actions/Test'

import AuthAction from '../../redux/actions/auth/auth.action'

import type { RegisterFormDataType } from '../../types/register/register.types'

export const counter = (dispatch:any):EffectCallback => {
    return () => dispatch(Test.increment())
}

export const onSubmit = (dispatch:any):any => {
    return (data:RegisterFormDataType):void => {
        dispatch(AuthAction.register(data))
    }
}