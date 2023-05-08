import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { createNewDog, getAllDogs } from './src/dogList.js'

const app = express()

app.use(cors())
app.use(express.json())

app.post ('/dogList', createNewDog)

app.get ('/dogList', getAllDogs)

app.listen(3013, () => {
  console.log('Listening on http://localhost:3013...')})


export const api = functions.https.onRequest(app)