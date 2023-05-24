import { db } from './dbConnect.js'



export async function getAllDogs(req, res) {
  const allDogs = await db.collection('dogs').get()
  const dogs = allDogs.docs.map(doc => ({
    id: doc.id, ...doc.data()
  }))
  res.send(dogs)
}

export async function updateDog(req, res) {
  console.log("update dog started")
  const {dogId} = req.params
  const newDogData = req.body
  await db.collection("dogs").doc(dogId).update(newDogData)
  console.log("update dog: update")
 getAllDogs(req, res);
 console.log("update dog: finished")
}

export async function deleteDog(req, res) {
  console.log("delete dog:start")
  const {dogId} = req.params
  await coll.doc(itemId).delete();
  getAllDogs(req, res);
  console.log("delte dog:finished")
}
