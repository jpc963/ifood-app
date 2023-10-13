import { createContext, useState, useEffect } from "react"
import { db, auth } from "../../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { format, subDays } from "date-fns"

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

	//TODO: Google Sign In

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

	const addDespesa = async (valor, descricao, categoria, diaDeHoje) => {
		try {
			await addDoc(collection(doc(db, "users", user.uid), "corridas"), {
				valor: valor,
				descricao: descricao,
				categoria: categoria,
				createdAt: diaDeHoje,
				tipo: "despesa",
			})
		} catch (error) {
			console.log("[ADD_DESPESA]", error)
		}
	}

	const addCorrida = async (valor, distancia, duracao, diaDeHoje) => {
		try {
			await addDoc(collection(doc(db, "users", user.uid), "corridas"), {
				valor: valor,
				distancia: distancia,
				duracao: duracao,
				createdAt: diaDeHoje,
				tipo: "receita",
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

	const updateDespesa = async (id, valor, descricao, categoria) => {
		try {
			await setDoc(
				doc(doc(db, "users", user.uid), "corridas", id),
				{
					valor: valor,
					descricao: descricao,
					categoria: categoria,
				},
				{ merge: true }
			)
		} catch (error) {
			console.log("[UPDATE_CORRIDA]", error)
		}
	}

	const getLancamentos = async (dias) => {
		let diasMostrados =
			dias === 7
				? format(subDays(new Date(), dias), "dd/MM/yyyy")
				: dias === 1
				? format(new Date(), "dd/MM/yyyy")
				: null

		try {
			let corridas = dias
				? await getDocs(
						query(
							collection(doc(db, "users", user.uid), "corridas"),
							orderBy("createdAt", "desc"),
							where("createdAt", ">=", diasMostrados)
						)
				  )
				: await getDocs(
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
			console.log("[GET_CORRIDAS_HOJE]", error)
		}
	}

	const getValorTotalLancamentos = async () => {
		let valor = 0
		let valorTotal = 0
		let valorReceita = 0
		let valorDespesa = 0

		try {
			await getDocs(collection(doc(db, "users", user.uid), "corridas")).then(
				(snapshot) => {
					snapshot.forEach((doc) => {
						valor += Number(doc.data().valor)
						if (doc.data().tipo === "receita") {
							valorTotal += Number(doc.data().valor)
							valorReceita += Number(doc.data().valor)
						} else {
							valorTotal -= Number(doc.data().valor)
							valorDespesa += Number(doc.data().valor)
						}
					})
				}
			)

			return Promise.resolve({
				valorTotal: Math.round(valorTotal),
				porcentagemReceita: Math.round((valorReceita / valor) * 100),
				porcentagemDespesa: Math.round((valorDespesa / valor) * 100),
			})
		} catch (error) {
			console.log("[GET_VALOR_TOTAL_LANCAMENTOS]", error)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				register,
				logout,
				addDespesa,
				addCorrida,
				updateCorrida,
				updateDespesa,
				getLancamentos,
				getValorTotalLancamentos,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
