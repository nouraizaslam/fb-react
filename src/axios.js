import axios from 'axios'


const instance = axios.create({
    // baseURL: 'https://facebook-clo.herokuapp.com'
    baseURL: 'https://facebook-clo.herokuapp.com'
})

export default instance

