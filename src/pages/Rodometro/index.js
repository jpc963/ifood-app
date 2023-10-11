import { Text } from "react-native"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export default function Rodometro({ navigation }) {
	return (
		<Container>
			<Text>Rodometro</Text>

			<Footer navigation={navigation} />
		</Container>
	)
}
