import axios from 'axios'

export default axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: '8fab8da02c72b61f79bfa6255ad761d4'
    }
});