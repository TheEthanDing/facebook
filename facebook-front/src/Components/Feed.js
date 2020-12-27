import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import Widget from './Widget'

const Feed = () => {
    return (
        <div className='Feed'>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic='https://media-exp1.licdn.com/dms/image/C4E03AQEwFY4_QX5jMQ/profile-displayphoto-shrink_200_200/0/1598896724054?e=1614816000&v=beta&t=PQpicpOyaEohktSBb9KnFveQMORfAAi0yLnazi1rdL8'
                message='I smell paint quite often'
                timestamp='1164562658'
                imgName='imgName'
                username='Penis'
            />
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
