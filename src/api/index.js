import axios from "axios"

// const API = axios.create({baseURL:"https://ilenla-backend.onrender.com"})
const API = axios.create({baseURL:"http://localhost:8000"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem("profile")){
        req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req
})






