import { TouchableOpacity } from "react-native"
import Ionicon from "@expo/vector-icons/Ionicons"

export const Filtro = ({ dropdown, setDropdown }) => {
	return (
		<TouchableOpacity onPress={() => setDropdown(!dropdown)}>
			<Ionicon
				name="filter-outline"
				size={20}
				color="#fff"
			/>
		</TouchableOpacity>
	)
}
