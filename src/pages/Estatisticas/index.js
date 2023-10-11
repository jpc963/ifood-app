import { Text } from "react-native"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export default function Estatisticas({ navigation }) {
	return (
		<Container>
			<Text>Estatisticas</Text>

			<Footer navigation={navigation} />
		</Container>
	)
}
