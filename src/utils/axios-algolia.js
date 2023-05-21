import axios from 'axios'

export const axiosES = axios.create({
  baseURL: process.env.api_baseurl,
  maxBodyLength: Infinity,
  headers:{
    'Content-Type':'application/json'
  }
})
