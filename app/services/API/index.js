import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ez-stock-gpelincel.vercel.app/api/api/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    }
});

export default instance;