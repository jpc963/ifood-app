import { Text } from "react-native"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export default function Financas({ navigation }) {
	return (
		<Container>
			<Text>Financas</Text>

			<Footer navigation={navigation} />
		</Container>
	)
}
