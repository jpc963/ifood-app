import { useEffect, useState } from "react"
import * as Location from "expo-location"

import MapView from "react-native-maps"
import Ionicon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from "react-native"

import Pin from "../Pin"

export default function Mapa() {
	const [region, setRegion] = useState(null)
	const [marker, setMarker] = useState(null)

	const loadLocation = async () => {
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

	useEffect(() => {
		loadLocation()
	}, [])

	const newMarker = (e) => {
		setMarker({
			coords: e,
		})
	}

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
				onLongPress={(e) => newMarker(e.nativeEvent.coordinate)}
				onPress={() => setMarker(null)}
			>
				{marker && <Pin marker={marker} />}
			</MapView>

			<TouchableOpacity
				onPress={() => loadLocation()}
				style={{
					position: "absolute",
					bottom: 80,
					right: 16,
				}}
			>
				<Ionicon
					name="navigate-circle"
					size={56}
					color="#ef233c"
				/>
			</TouchableOpacity>
		</>
	)
}
