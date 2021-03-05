import type { EffectCallback } from 'react'

import type { LoginFormDataType } from '../../types/login/login.types'

import AuthAction from '../../redux/actions/auth/auth.action'

export const onSubmit = (dispatch:any):any => {
    return (data:LoginFormDataType):void => {
        dispatch(AuthAction.login(data))
    }
}