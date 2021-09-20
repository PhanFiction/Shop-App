import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/user/login`, credentials)
  return response.data
}

export default {
  login
}