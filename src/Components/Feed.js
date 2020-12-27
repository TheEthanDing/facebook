import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'

const Feed = () => {
    return (
        <div className='Feed'>
            <StoryReel />
            <MessageSender />

            {
                /*                 postData.map(entry => (
                                    <Post
                                        profilePic={entry.avatar}
                                          message={entry.text}
                                        timestamp={entry.timestamp}
                                        imgName={entry.imgName}
                                        username={entry.user}
                                    />
                                )) */
            }
        </div>
    )
}

export default Feed
