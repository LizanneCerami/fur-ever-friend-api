import { db } from './dbConnect.js'

export async function createNewDog(req, res) {
  const newDog = req.body
  await db.collection("dogs").add(newDog)
  res.status(201).send({message: 'dog-added.'})
}

export async function getAllDogs(req, res) {
  const allDogs = await db.collection('dogs').get()
  const dogs = allDogs.docs.map(doc => ({
    id: doc.id, ...doc.data()
  }))
  res.send(dogs)
}