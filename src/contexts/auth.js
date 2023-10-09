import { createContext, useState, useEffect } from "react"
import { db, auth } from "../../firebaseConfig"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth"
import {
	doc,
	setDoc,
	getDoc,
	addDoc,
	collection,
	getDocs,
	query,
	orderBy,
	where,
} from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { format, subDays, subMonths } from "date-fns"

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
			console.log("[REGISTER]", error)
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
			console.log("[LOGIN]", error)
		}
	}

	const logout = async () => {
		try {
			await signOut(auth).then(() => {
				setUser(null)
				AsyncStorage.clear()
			})
		} catch (error) {
			console.log("[LOGOUT]", error)
		}
	}

	const addCorrida = async (valor, distancia, duracao, diaDeHoje) => {
		try {
			await addDoc(collection(doc(db, "users", user.uid), "corridas"), {
				valor: valor,
				distancia: distancia,
				duracao: duracao,
				createdAt: diaDeHoje,
			})
		} catch (error) {
			console.log("[ADD_CORRIDA]", error)
		}
	}

	const updateCorrida = async (id, valor, distancia, duracao) => {
		try {
			await setDoc(
				doc(doc(db, "users", user.uid), "corridas", id),
				{
					valor: valor,
					distancia: distancia,
					duracao: duracao,
				},
				{ merge: true }
			)
		} catch (error) {
			console.log("[UPDATE_CORRIDA]", error)
		}
	}

	const getCorridasHoje = async () => {
		try {
			let corridas = await getDocs(
				query(
					collection(doc(db, "users", user.uid), "corridas"),
					orderBy("createdAt", "desc"),
					where("createdAt", ">=", format(new Date(), "dd/MM/yyyy"))
				)
			)

			corridas = corridas.docs.map((doc) => {
				return {
					...doc.data(),
					id: doc.id,
					createdAt: doc.data().createdAt.slice(0, 10),
				}
			})

			return corridas
		} catch (error) {
			console.log("[GET_CORRIDAS_HOJE]", error)
		}
	}

	const getCorridas7Dias = async () => {
		try {
			let sevenDaysAgo = format(subDays(new Date(), 7), "dd/MM/yyyy")
			let corridas = await getDocs(
				query(
					collection(doc(db, "users", user.uid), "corridas"),
					orderBy("createdAt", "desc"),
					where("createdAt", ">=", sevenDaysAgo)
				)
			)

			corridas = corridas.docs.map((doc) => {
				return {
					...doc.data(),
					id: doc.id,
					createdAt: doc.data().createdAt.slice(0, 10),
				}
			})

			return corridas
		} catch (error) {
			console.log("[GET_CORRIDAS_7_DIAS]", error)
		}
	}

	const getCorridasTotais = async () => {
		try {
			let corridas = await getDocs(
				query(
					collection(doc(db, "users", user.uid), "corridas"),
					orderBy("createdAt", "desc")
				)
			)

			corridas = corridas.docs.map((doc) => {
				return {
					...doc.data(),
					id: doc.id,
					createdAt: doc.data().createdAt.slice(0, 10),
				}
			})

			return corridas
		} catch (error) {
			console.log("[GET_CORRIDAS_TOTAIS]", error)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				register,
				logout,
				addCorrida,
				updateCorrida,
				getCorridasHoje,
				getCorridas7Dias,
				getCorridasTotais,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
