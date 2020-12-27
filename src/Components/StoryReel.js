import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            {/* story, image, proiflepic, title, etc.*/}
            <Story
                image='https://study.com/cimages/course-image/big-picture-thinking-in-business_183979_large.jpg'
                profileSrc='https://i.pinimg.com/originals/b1/b9/0b/b1b90b560ca1c7c312e05cb869ecbedf.png'
                title='Dick Cheney'
            />

            <Story
                image='https://study.com/cimages/course-image/big-picture-thinking-in-business_183979_large.jpg'
                profileSrc='https://i.pinimg.com/originals/b1/b9/0b/b1b90b560ca1c7c312e05cb869ecbedf.png'
                title='Dick Cheney'
            />

            <Story
                image='https://study.com/cimages/course-image/big-picture-thinking-in-business_183979_large.jpg'
                profileSrc='https://i.pinimg.com/originals/b1/b9/0b/b1b90b560ca1c7c312e05cb869ecbedf.png'
                title='Dick Cheney'
            />

        </div>
    )
}

export default StoryReel
