import CreatePostAction from '../../redux/actions/createpost/create-post.action'

import type { ApiResponse } from '../common.types'

interface CreatePostInitialStateType {
    getPosts?:GetPostsResponseType;
}

interface CreatePostActionType {
    type:CreatePostAction;
    data:GetPostsResponseType;
}

interface GetPostsResponseType extends ApiResponse {}

export type {
    CreatePostInitialStateType,
    GetPostsResponseType,
    CreatePostActionType
}