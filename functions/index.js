import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getAllDogs } from './src/dogList'

const app = express()

app.use(cors())
app.use(express.json())

app.get ('/dogList', getAllDogs)

app.listen(3013, () => 
  console.log('Listening on http://localhost:3013...'))


// export const api = functions.https.onRequest(app)