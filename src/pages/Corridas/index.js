import { useNavigation } from "@react-navigation/native"
import {
	Container,
	Footer,
	Header,
	Button,
	HeaderText,
	ListContainer,
	List,
	ItemArea,
	ItemContent,
	TitleText,
	Text,
} from "./styles"

export default function Corridas() {
	const navigation = useNavigation()

	return (
		<Container>
			<Header>
				<Button>
					<HeaderText>Hoje</HeaderText>
				</Button>

				<Button>
					<HeaderText>7 dias</HeaderText>
				</Button>

				<Button>
					<HeaderText>30 dias</HeaderText>
				</Button>

				<Button>
					<HeaderText>Todas</HeaderText>
				</Button>
			</Header>

			<ListContainer>
				<List
					data={[1, 2, 3, 4, 5, 6, 7, 8]}
					showsVerticalScrollIndicator={false}
					renderItem={() => (
						<ItemArea>
							<ItemContent>
								<TitleText>Valor</TitleText>
								<Text>R$ 10,00</Text>
							</ItemContent>
							<ItemContent>
								<TitleText>Duração</TitleText>
								<Text>13 min</Text>
							</ItemContent>
							<ItemContent>
								<TitleText>Distância</TitleText>
								<Text>5 Km</Text>
							</ItemContent>
							<ItemContent>
								<TitleText>Data</TitleText>
								<Text>10/10/2021</Text>
							</ItemContent>
						</ItemArea>
					)}
				/>
			</ListContainer>

			<Footer>
				<Button onPress={() => navigation.goBack()}>
					<HeaderText>Voltar</HeaderText>
				</Button>
			</Footer>
		</Container>
	)
}
