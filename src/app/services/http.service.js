import axios from 'axios'
//import logger from './log.service'
import { toast } from 'react-toastify';
import config from '../config.json'

axios.defaults.baseURL = config.API_END_POINT

axios.interceptors.response.use(
    (res) => res,
    function (e) {
        const expectedErrors = e.response &&
            e.response.status >= 400 &&
            e.response.status < 500
        if (!expectedErrors) {
            console.log("Unexpected Server Error")
            //logger.log(e)
            toast.error("Unexpected Server Error")
        }
        return Promise.reject(e)
    }
)

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default httpService;
