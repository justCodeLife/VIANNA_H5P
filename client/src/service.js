import Axios from "axios";

export default () => {
    return Axios.create({
        baseURL: process.env.REACT_APP_API_URL || `${window.location.origin}/api`,
        withCredentials: true,
        timeout: 5000,
    })
}
