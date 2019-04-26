import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-83320.firebaseio.com/'
});

export default instance;