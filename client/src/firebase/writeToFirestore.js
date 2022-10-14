//import { appInit } from "./config.js";
import { firestoreMainObj } from "./firestoreInit.js";
import { setDoc, doc } from "firebase/firestore";

async function insertToFirestoreDB(dbInsertionData) {
  await setDoc(doc(firestoreMainObj, "NewFolder", "DocOne"), dbInsertionData)
    .then (() => {console.log("Done writing to DB")})
      .catch (() => {console.error("Unable to write to DB")})
};

/*
//dbCollerction should be a string
//dbDoc should be a Doc
//dbInsertionData should be an object(The entry you want to write on the)
async function insertToFirestoreDB(dbCollection, dbDoc, dbInsertionData) {
  await setDoc(doc(firestoreMainObj, dbCollection, dbDoc), dbInsertionData)
    .then (() => {console.log("Done writing to DB")})
      .catch (() => {console.error("Unable to write to DB")})
};
*/

export { insertToFirestoreDB };