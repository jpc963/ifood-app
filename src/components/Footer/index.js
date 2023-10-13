import { Button, Container, Text } from "./styles"

export const Footer = ({ navigation, novaReceitaButton }) => {
	return (
		<Container style={{ elevation: 3 }}>
			<Button onPress={() => navigation.goBack()}>
				<Text>Voltar</Text>
			</Button>

			{novaReceitaButton && (
				<Button onPress={() => navigation.navigate("Receita")}>
					<Text>Nova corrida</Text>
				</Button>
			)}
		</Container>
	)
}
