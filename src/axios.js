import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://boxx-tv.herokuapp.com//'

})

export default instance;