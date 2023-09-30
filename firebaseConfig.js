import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	apiKey: "AIzaSyDxOIvcJzslu4vT74UsyHIbV7T_iqFuC_M",
	authDomain: "ifoodstats.firebaseapp.com",
	projectId: "ifoodstats",
	storageBucket: "ifoodstats.appspot.com",
	messagingSenderId: "41082001242",
	appId: "1:41082001242:web:decfa63903d9d4b7860563",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
