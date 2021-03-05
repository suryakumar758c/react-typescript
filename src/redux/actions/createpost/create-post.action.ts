import PostsService from '../../../services/posts.service'

import type { GetPostsResponseType } from "../../../types/createpost/create-post.types"

export default class CreatePostAction {

    static GET_POSTS:string = 'GET_POSTS'

    static getPosts() {
        return async (dispatch:any):Promise<any> => {
            try {

                const responseData:any = await PostsService.getPosts()
                const response:GetPostsResponseType = responseData?.data
                dispatch({
                    type: CreatePostAction.GET_POSTS,
                    data: response
                })

            } catch(e) {
                console.error('get posts exception',e)
            }
        }
    }

}