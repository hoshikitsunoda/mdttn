import express, { Application, Request, Response, Router } from 'express'
import * as dotenv from 'dotenv'
import SpotifyWebApi from 'spotify-web-api-node'

dotenv.config()

const app: Application = express()
const router: Router = express.Router()

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: 'http://localhost:5000/callback',
})

router.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

router.get('/login', (req: Request, res: Response) => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
  ]
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'loggedin')
  res.redirect(authorizeURL)
})

router.get('/callback', async (req: Request, res: Response) => {
  let code
  if (req.query && req.query.code) {
    code = (req.query as any).code
  }
  try {
    var data = await spotifyApi.authorizationCodeGrant(code)
    const { access_token, refresh_token } = data.body
    spotifyApi.setAccessToken(access_token)
    spotifyApi.setRefreshToken(refresh_token)

    res.redirect('http://localhost:5000/')
  } catch (err) {
    res.redirect('/#/error/invalid token')
    console.log(err)
  }
})

router.get('/playlists', async (req, res) => {
  try {
    var result = await spotifyApi.getUserPlaylists()
    console.log(result.body)
    res.status(200).send(result.body)
  } catch (err) {
    res.status(400).send(err)
  }
})

app.use('/', router)

app.listen(5000, () => console.log('Server running port 5000!'))
