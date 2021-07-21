import axios from 'axios'

const localAPI = axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/api'
  : process.env.BASE_URL
})

export default localAPI
