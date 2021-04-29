import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: 'your api key'
    }
});