import axios from "axios"

// const API = axios.create({baseURL:"https://ilenla-backend.onrender.com"})
const API = axios.create({baseURL:"http://localhost:8000"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem("profile")){
        req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req
})



//ilenla API
export const createProperty = (property) => API.post("/property", property)
export const fetchProperties = (page) => API.get(`/property`);
export const fetchAgent = (id) => API.get(`/user/${id}`)
export const fetchAgents = () => API.get(`/user`)



