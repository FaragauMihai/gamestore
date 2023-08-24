import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '1819acbf044c423c947c2698d152928b'
    }
})