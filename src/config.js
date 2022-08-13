import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://doctorli-spring.herokuapp.com/api/"

})