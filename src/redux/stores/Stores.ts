import { createStore,applyMiddleware,combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import TestStore from '../reducers/Test'
import AuthReducer from '../reducers/auth/auth.reducer'
import CreatePostReducer from '../reducers/createpost/create-post.reducer'

const combine:any = {
    counter:TestStore,
    auth:AuthReducer,
    posts:CreatePostReducer,
}

export default createStore(
    combineReducers(combine),
    applyMiddleware(thunkMiddleware)
)