import axios from 'axios'
import {useQuery} from 'react-query'

const useAxios = (url, options = {}, queryOptions = {}) => {
  const {data, isLoading, error} = useQuery(
    url,
    async () => {
      const response = await axios(url, options)
      return response.data
    },
    {
      ...queryOptions,
    }
  )

  return {data, isLoading, error}
}

export default useAxios
