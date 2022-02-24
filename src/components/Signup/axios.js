import axios from 'axios'

export default axios.create({
  baseURL: 'https://k1-backend.herokuapp.com/api/login',
  // baseURL: 'http://localhost:5000',
})
