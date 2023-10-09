import { useContext, useEffect, useState } from "react"
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
import { AuthContext } from "../../contexts/auth"
import { ActivityIndicator } from "react-native"
import { RefreshControl } from "react-native-gesture-handler"

export default function Corridas({ navigation }) {
	const [corridas, setCorridas] = useState([])
	const { getCorridasHoje, getCorridas7Dias, getCorridasTotais } =
		useContext(AuthContext)
	const [isLoading, setIsLoading] = useState(true)

	const loadCorridasHoje = async () => {
		const response = await getCorridasHoje()
		setCorridas(response)
	}

	const loadCorridas7Dias = async () => {
		const response = await getCorridas7Dias()
		setCorridas(response)
	}

	const loadCorridasTotais = async () => {
		const response = await getCorridasTotais()
		setCorridas(response)
	}

	useEffect(() => {
		loadCorridasHoje().then(() => setIsLoading(false))
	}, [])

	return (
		<Container>
			<Header>
				<Button onPress={() => loadCorridasHoje()}>
					<HeaderText>Hoje</HeaderText>
				</Button>

				<Button onPress={() => loadCorridas7Dias()}>
					<HeaderText>7 dias</HeaderText>
				</Button>

				<Button onPress={() => loadCorridasTotais()}>
					<HeaderText>Todas</HeaderText>
				</Button>
			</Header>

			{isLoading ? (
				<ActivityIndicator />
			) : (
				<ListContainer>
					<List
						data={corridas}
						showsVerticalScrollIndicator={false}
						refreshControl={
							<RefreshControl
								refreshing={isLoading}
								onRefresh={() => loadCorridasHoje()}
							/>
						}
						renderItem={({ item }) => (
							<ItemArea
								onPress={() => navigation.navigate("Add", item)}
								key={item.id}
							>
								<ItemContent>
									<TitleText>Valor</TitleText>
									<Text>R$ {item.valor}</Text>
								</ItemContent>

								<ItemContent>
									<TitleText>Duração</TitleText>
									<Text>{item.duracao} min</Text>
								</ItemContent>

								<ItemContent>
									<TitleText>Distância</TitleText>
									<Text>{item.distancia} Km</Text>
								</ItemContent>

								<ItemContent>
									<TitleText>Data</TitleText>
									<Text>{item.createdAt}</Text>
								</ItemContent>
							</ItemArea>
						)}
					/>
				</ListContainer>
			)}

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
