import Axios from "axios";

const PROTOCOL = 'http://';
const BASEURL = 'dr15.devcodin.com';

const AxiosInstance = Axios.create({
    baseURL: PROTOCOL + BASEURL,
    headers: {'Accept': 'application/json'}
});

export default AxiosInstance;