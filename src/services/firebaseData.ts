import { collection, query, where, getDocs, getFirestore, enableIndexedDbPersistence } from "firebase/firestore"
import type { DocumentData } from "firebase/firestore/lite"
import { firebaseApp } from "@app/services/firebaseInit"
const firebaseDb = getFirestore(firebaseApp)
enableIndexedDbPersistence(firebaseDb)
  .catch((err) => {
    //   if (err.code == 'failed-precondition') {
    //   } else if (err.code == 'unimplemented') {
    //   }
    console.error(err)
})

export const getData = (coll: string) {
    const colRef = collection(firebaseDb, coll)
    const snapshot = await getDocs(colRef)

    //const q = query(colRef, where("address", "array-contains", a), where("year", "==", y))

    //const snapshot = await getDocs(q)
    if (snapshot.docs.length === 0) {
        return null
    }
    
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data())
    // })
    //const docRef = colRef.where("address", "array-contains", a).where("year", "==", y);
    //const docs = await docRef.get();
    
    const doc = snapshot.docs[0]
    const data = doc.data()
    data._id = doc.id
    return data
}