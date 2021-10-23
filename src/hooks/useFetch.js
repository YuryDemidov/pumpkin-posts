import React, { useState } from 'react'

export const useFetch = (fetchData, onError) => {
  const [isLoading, setIsLoading] = useState(false)

  const createRequest = async (...args) => {
    try {
      setIsLoading(true)
      await fetchData(...args)
    } catch (error) {
      onError(
        <>
          Ошибка!
          <br />
          {error.message}
        </>
      )
    } finally {
      setIsLoading(false)
    }
  }

  return [createRequest, isLoading]
}
