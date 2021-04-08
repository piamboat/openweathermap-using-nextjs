import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: '431b03c70d9b5cfb6fe964a575898732'
    }
});