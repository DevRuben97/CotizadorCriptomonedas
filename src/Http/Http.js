import axios from 'axios';

const apiKey= '514681f42cab05e094166eba71d9e75d7e2893a5c9f635a95b0ee15c32a044c5';

const http= axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
    headers: {
        accept: '*',
        Authorization: {
            ApiKey: apiKey
        }
    }
    
})


export default http;