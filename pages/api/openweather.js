import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: 'enter your api key'
    }
});