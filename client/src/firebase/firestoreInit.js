import { getFirestore } from "firebase/firestore";

import { appInit } from "./config.js";

export const firestoreMainObj = getFirestore(appInit);