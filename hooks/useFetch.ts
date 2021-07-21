import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'

import localAPI from 'services/local'

export default function useFetch <T = null> (request: AxiosRequestConfig) {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
  
      const response = await localAPI.request<T>(request)
  
      setResponse(response)
    } catch (err) {
      setError(error)
    } finally {
      setIsLoading(false)
    }  
  }

  return {
    isLoading,
    response,
    error,
    fetchData
  }
}