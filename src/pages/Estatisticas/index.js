import { Text } from "react-native"
import React from "react"
import { Container, Button, Footer, HeaderText } from "./styles"

export default function Estatisticas({ navigation }) {
	return (
		<Container>
			<Text>Estatisticas</Text>

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
