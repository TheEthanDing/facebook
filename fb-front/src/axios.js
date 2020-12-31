import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://facebook-clone-ethan.herokuapp.com/'
})

export default instance