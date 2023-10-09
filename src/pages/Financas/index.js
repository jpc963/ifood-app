import { Text } from "react-native"
import React from "react"
import { Container, Button, Footer, HeaderText } from "./styles"

export default function Financas({ navigation }) {
	return (
		<Container>
			<Text>Financas</Text>

			<Footer>
				<Button onPress={() => navigation.goBack()}>
					<HeaderText>Voltar</HeaderText>
				</Button>

				<Button onPress={() => navigation.navigate("Add")}>
					<HeaderText>Nova corrida</HeaderText>
				</Button>
			</Footer>
		</Container>
	)
}
