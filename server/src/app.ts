import express, { Application, Request, Response, Router } from 'express'
import * as dotenv from 'dotenv'
import SpotifyWebApi from 'spotify-web-api-node'

dotenv.config()

const app: Application = express()
const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

router.get('/login', (req, res) => {
  res.send('Login')
})

app.use('/', router)

app.listen(5000, () => console.log('Server running port 5000!'))
