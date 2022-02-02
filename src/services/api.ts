import axios from "axios";

const api = axios.create({
    baseURL: "https://autoluby.dev.luby.com.br/"
})

export default api
