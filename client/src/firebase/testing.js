//Trying to write to DB
import { insertToFirestoreDB } from "./writeToFirestore.js";

const objToWrite = {
    Name: "WriteFrom testing file",
    Surname: "Boldy",
    Adress: "Earl"
  };

insertToFirestoreDB(objToWrite);