import { db } from './dbConnect'

export async function updateDog(req, res) {
  const {dogId} = req.params
  const newDogData = req.body
  await db.collection("dogs").doc(dogId).update(newDogData)

  res.status(202).send({message:" dogs updated"})
}