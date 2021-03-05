import __model__Action from "../../actions/__model__/__model__.action"

const authInitialState:any = {
    count:0
}

const __model__Reducer = (state:any = authInitialState,action:any) => {

    switch(action.type) {

        case __model__Action.SAMPLE:
            return {
                count:state.count + 1
            }

        default:
            return state

    }

} 

export default __model__Reducer