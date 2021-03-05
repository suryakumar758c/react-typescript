import Test from '../actions/Test'

import type { 
    RegisterInitialStateType, 
    RegisterActionType
} from '../../types/register/register.types'

const initialState:RegisterInitialStateType = {
    count:0
}

const TestStore = (state:RegisterInitialStateType = initialState, action:RegisterActionType):RegisterInitialStateType => {
    switch(action.type) {
        case Test.INCREMENT:
            return {
                count: state.count + 1
            }
        case Test.DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default TestStore