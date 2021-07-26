import axios from 'axios'

const positionStack = axios.create({
  baseURL: 'http://api.positionstack.com/v1'
})

export default positionStack
