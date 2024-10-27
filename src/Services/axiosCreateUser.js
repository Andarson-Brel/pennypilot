import axios from "axios";

const axiosCreateUser = axios.create({
    baseURL: "https://c2v386fr-8080.euw.devtunnels.ms"
})

export default axiosCreateUser;