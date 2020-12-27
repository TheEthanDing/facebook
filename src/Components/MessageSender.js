import { SettingsInputAntenna } from '@material-ui/icons'
import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('Submitting')
    }

    return (
        <div className='messageSender'>
            <Avatar src='https://media-exp1.licdn.com/dms/image/C4E03AQEwFY4_QX5jMQ/profile-displayphoto-shrink_200_200/0/1598896724054?e=1614816000&v=beta&t=PQpicpOyaEohktSBb9KnFveQMORfAAi0yLnazi1rdL8' />
            <form>
                <input
                    type="text"
                    className='messageSender__input'
                    placeholder="What's on your mind?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <Input
                    type="file"
                    className='messageSender__fileSelector'
                    onChange={handleChange} />
                <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
            </form>
        </div>
    )
}

export default MessageSender
