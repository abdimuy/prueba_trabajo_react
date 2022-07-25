import axios from 'axios'
import apiUrl from '../contants/apiUrl'

const API = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'Application/json'
  }
})

export default API