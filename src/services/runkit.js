import axios from 'axios';

const runkitAxios = axios.create({
    baseURL: 'https://untitled-dojg49rq62w8.runkit.sh'
})

export const getLast10DaysReadings = async function () {
    const response = await runkitAxios.get('/get-reading-last-10-days')
    return response.data
}

export default {
    getLast10DaysReadings
}