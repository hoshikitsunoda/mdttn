import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import useAsyncEffect from 'use-async-effect'

const getPlaylists = () => {
  const [data, setData] = useState({})

  useAsyncEffect(async () => {
    const result: AxiosResponse<any> = await axios(
      'http://localhost:5000/playlists'
    )

    setData(result.data)
  }, [])

  return data
}

export default getPlaylists
