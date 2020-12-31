import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

import instance from '../axios'
import FormData from 'form-data'

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (image) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name)

            await instance.post('/upload/image', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res) => {
                console.log(res.data)

                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: 'Ethan',
                    timestamp: Date.now(),
                    avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQEwFY4_QX5jMQ/profile-displayphoto-shrink_200_200/0/1598896724054?e=1614816000&v=beta&t=PQpicpOyaEohktSBb9KnFveQMORfAAi0yLnazi1rdL8'
                }

                console.log(postData)

                savePost(postData)
            })
        } else {
            const postData = {
                text: input,
                user: 'Ethan',
                timestamp: Date.now(),
                avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQEwFY4_QX5jMQ/profile-displayphoto-shrink_200_200/0/1598896724054?e=1614816000&v=beta&t=PQpicpOyaEohktSBb9KnFveQMORfAAi0yLnazi1rdL8'
            }

            console.log(postData)

            savePost(postData)
        }

        setImageUrl('')
        setInput('')

        setTimeout(function () { window.location.reload(); }, 10)
    }

    const savePost = async (postData) => {
        await instance.post('/upload/post', postData).then((res) => {
            console.log(res)
        })
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
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
                    {/* read up mat-ui input and avatar*/}
                    <button
                        onClick={handleSubmit}
                        type='submit'>Hidden Submit</button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h4>Live Video</h4>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>

        </div >
    )
}

export default MessageSender
