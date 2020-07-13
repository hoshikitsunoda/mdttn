import express, { Application, Request, Response, Router } from 'express'
import SpotifyWebApi from 'spotify-web-api-node'

const app: Application = express()
const router: Router = express.Router()

router.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.use('/api', router)

app.listen(5000, () => console.log('Server running port 5000!'))
