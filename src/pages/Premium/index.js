import { Text } from "react-native"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export default function Premium({ navigation }) {
	return (
		<Container>
			<Text>Premium</Text>

			<Footer navigation={navigation} />
		</Container>
	)
}
