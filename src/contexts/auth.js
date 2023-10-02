import { createContext, useState, useEffect } from "react"
import { db, auth } from "../../firebaseConfig"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext()

function AuthProvider({ children }) {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const loadStorage = async () => {
			const storageUser = await AsyncStorage.getItem("user")

			if (storageUser) {
				setUser(JSON.parse(storageUser))
			}
		}

		loadStorage()
	}, [])

	const register = async (nome, usuario, email, password) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password).then(
				async (response) => {
					setUser(response.user)
					AsyncStorage.setItem("user", JSON.stringify(response.user)).then(
						async () => {
							await setDoc(doc(db, "users", response.user.uid), {
								nome: nome,
								usuario: usuario,
								email: email,
							})
						}
					)
				}
			)
		} catch (error) {
			console.log(error)
		}
	}

	const login = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password).then(
				async (userCredential) => {
					await getDoc(doc(db, "users", userCredential.user.uid)).then(
						(snapshot) => {
							setUser({
								uid: userCredential.user.uid,
								nome: snapshot.data().nome,
								usuario: snapshot.data().usuario,
								email: snapshot.data().email,
							})
							AsyncStorage.setItem(
								"user",
								JSON.stringify({
									uid: userCredential.user.uid,
									nome: snapshot.data().nome,
									usuario: snapshot.data().usuario,
									email: snapshot.data().email,
								})
							)
						}
					)
				}
			)
		} catch (error) {
			console.log(error)
		}
	}

	const logout = async () => {
		try {
			await signOut(auth).then(() => {
				setUser(null)
				AsyncStorage.clear()
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
