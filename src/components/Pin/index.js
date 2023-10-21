import { Marker } from "react-native-maps"

export default function Pin({ marker }) {
	return (
		<Marker
			coordinate={marker.coords}
			title={marker.title}
		/>
	)
}
