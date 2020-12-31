import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'

// middleware
import instance from '../axios'


const Feed = () => {
    const [profile, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        instance.get('/retrieve/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed
