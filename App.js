import "react-native-gesture-handler"

import { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthProvider from "./src/contexts/auth"
import Routes from "./src/routes"
import * as Location from "expo-location"
import { Text } from "react-native"

export default function App() {
	const [permission, setPermission] = useState(
		Location.getForegroundPermissionsAsync() === "granted" ? true : false
	)

	useEffect(() => {
		;(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== "granted") {
				console.log("Permissão para acessar a localização foi negada")
				return
			}

			setPermission(true)
		})()
	}, [])

	return (
		<>
			{permission ? (
				<NavigationContainer>
					<AuthProvider>
						<Routes />
					</AuthProvider>
				</NavigationContainer>
			) : (
				<Text
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					Permissão negada
				</Text>
			)}
		</>
	)
}
