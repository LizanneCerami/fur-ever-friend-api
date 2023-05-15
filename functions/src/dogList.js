import { db } from './dbConnect.js'



export async function getAllDogs(req, res) {
  const allDogs = await db.collection('dogs').get()
  const dogs = allDogs.docs.map(doc => ({
    id: doc.id, ...doc.data()
  }))
  res.send(dogs)
}

export async function updateDog(req, res) {
  const {dogId} = req.params
  const newDogData = req.body
  await db.collection("dogs").doc(dogId).update(newDogData)

  res.status(202).send({message:" dog added"})
}

export async function deleteDog(req, res) {
  const {dogId} = req.params
  await coll.doc(itemId).delete();
  getAllDogs(req, res);
}
