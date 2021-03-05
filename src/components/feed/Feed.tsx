import React from 'react'

import CreatePost from '../createpost/create-post'
import '../../redux/actions/websocket/websocket.action'

const Feed = () => {

    console.log('this is feed v1')
    
    return <>
        <CreatePost/>
    </>
}

export default Feed