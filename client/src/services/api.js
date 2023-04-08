import axios from "axios";

const URL = "http://localhost:8000";

async function register(data) {
    try {
        return await axios.post(`${URL}/register`, data)
    } catch (error) {
        console.log(error);
    }
}

async function login(data) {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log(error);
    }
}
export { register, login }