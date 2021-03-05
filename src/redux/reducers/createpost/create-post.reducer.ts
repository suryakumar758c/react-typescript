import CreatePostAction from "../../actions/createpost/create-post.action"

import type { 
    CreatePostActionType,
    CreatePostInitialStateType
} from "../../../types/createpost/create-post.types"

const createPostInitialState:CreatePostInitialStateType = {
    getPosts:{
        code:0,
        message:'',
        data:null
    }
}

const CreatePostReducer = (state:CreatePostInitialStateType = createPostInitialState,action:CreatePostActionType):CreatePostInitialStateType => {

    switch(action.type) {

        case CreatePostAction.GET_POSTS:
            return {
                getPosts:action.data
            }

        default:
            return state

    }

} 

export default CreatePostReducer