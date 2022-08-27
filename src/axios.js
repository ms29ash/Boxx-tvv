import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://boxx-tvv.herokuapp.com/'

})

export default instance;