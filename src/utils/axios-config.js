import axios from 'axios'

// ** Axios Interceptor
axios.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))

  return request
})
axios.interceptors.response.use(
  response => {
    console.log('Response:', JSON.stringify(response, null, 2))

    return response
  },
  error => {
    console.log('Error:', JSON.stringify(error, null, 2))

    return Promise.reject(error)
  }
)
axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.timeout = 10000
