import ApiService from "./api.service"

import type {  } from "../types/createpost/create-post.types"

class PostsService extends ApiService {

    constructor() {
        super()
        this.authorizedRequestInterceptors()
        this.authorizedRequestInterceptors()
    }

    getPosts():Promise<any> {
        return this.get('/getPosts')
    }

}

export default new PostsService()