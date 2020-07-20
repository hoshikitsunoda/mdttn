import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import useAsyncEffect from 'use-async-effect'

const GetPlaylists = () => {
  const [tracksData, setTracksData] = useState({ items: { tracks: {} } })
  const [imageData, setImageData] = useState({ items: { images: {} } })

  useAsyncEffect(async () => {
    const result: AxiosResponse<any> = await axios(
      'http://localhost:5000/playlists'
    )
    setTracksData(result.data.items[0].tracks.href)
    setImageData(result.data.items[0].images[0].url)
  }, [])
  console.log(tracksData, imageData)
  return { tracksData, imageData }
}

export default GetPlaylists
