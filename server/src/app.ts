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

router.get('/login', (req, res) => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
  ]
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'loggedin')
  res.redirect(authorizeURL)

  // res.redirect(
  //   'https://accounts.spotify.com/authorize' +
  //     '?response_type=code' +
  //     '&client_id=' +
  //     process.env.CLIENT_ID +
  //     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  //     '&redirect_uri=' +
  //     encodeURIComponent('http://localhost:5000/')
  // )
})

router.get('/callback', (req: Request, res: Response) => {
  res.send('Callback')
})

app.use('/', router)

app.listen(5000, () => console.log('Server running port 5000!'))
