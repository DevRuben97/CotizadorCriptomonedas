import axios from 'axios';

const ApiKey= 'b7af1e1c-2b4b-49b6-88e6-e32c9044a285';

const http= axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com',
    headers: {
        ContentType: 'application/json',
        accept: '*',
        'X-CMC_PRO_API_KEY': ApiKey
    }
    
})


export default http;