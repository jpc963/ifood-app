import { Text } from "react-native"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export default function Faturas({ navigation }) {
	return (
		<Container>
			<Text>Faturas</Text>

			<Footer navigation={navigation} />
		</Container>
	)
}
