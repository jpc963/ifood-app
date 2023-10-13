import { useEffect, useState } from "react"
import MapView from "react-native-maps"
import * as Location from "expo-location"
import Ionicon from "@expo/vector-icons/Ionicons"

export default function Mapa() {
	const [region, setRegion] = useState(null)

	const loadLocation = async () => {
		await Location.getCurrentPositionAsync({
			accuracy: Location.Accuracy.High,
		})
			.then((res) => {
				setRegion({
					latitude: res.coords.latitude,
					longitude: res.coords.longitude,
					latitudeDelta: 0.0143,
					longitudeDelta: 0.0134,
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		const initialLocation = async () => {
			await Location.getLastKnownPositionAsync({
				accuracy: Location.Accuracy.High,
			})
				.then((res) => {
					setRegion({
						latitude: res.coords.latitude,
						longitude: res.coords.longitude,
						latitudeDelta: 0.0143,
						longitudeDelta: 0.0134,
					})
				})
				.catch((err) => {
					console.log(err)
				})
		}

		initialLocation()
	}, [])

	return (
		<>
			<MapView
				style={{ flex: 1 }}
				loadingEnabled={true}
				onMapLoaded={() => setRegion(region)}
				showsUserLocation={true}
				showsMyLocationButton={false}
				onRegionChangeComplete={(region) => setRegion(region)}
				region={region}
				followsUserLocation={true}
			/>

			<Ionicon
				name="navigate-circle"
				size={56}
				color="#ef233c"
				onPress={() => loadLocation()}
				style={{
					position: "absolute",
					bottom: 80,
					right: 16,
				}}
			/>
		</>
	)
}
