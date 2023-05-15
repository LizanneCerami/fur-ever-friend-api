import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { createNewDog, getAllDogs, updateDog } from './src/dogList.js'

const app = express()

app.use(cors())
app.use(express.json())

app.post ('/dogList', createNewDog)
app.patch('/dogList/:dogId', updateDog);
app.get ('/dogList', getAllDogs)

// app.listen(3013, () => {
  //   console.log('Listening on http://localhost:3013...')})

// http://127.0.0.1:5001/fur-ever-friend-api/us-central1/api/dogList
// use this to run emulators for api

// https://us-central1-fur-ever-friend-api.cloudfunctions.net/api/dogList
// use this link to view deployed api

export const api = functions.https.onRequest(app)