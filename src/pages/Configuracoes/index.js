import { Text } from "react-native"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export default function Configuracoes({ navigation }) {
	return (
		<Container>
			<Text>Configuracoes</Text>

			<Footer navigation={navigation} />
		</Container>
	)
}
