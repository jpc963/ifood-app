import { useContext } from "react"
import { useState, useEffect } from "react"
import { RefreshControl, ActivityIndicator } from "react-native"
import { Feather } from "@expo/vector-icons"
import { AuthContext } from "../../../../contexts/auth"

import {
	ListContainer,
	List,
	ItemArea,
	ItemContent,
	TitleText,
	Text,
} from "./styles"

export const ListLancamentos = () => {
	const { getLancamentos } = useContext(AuthContext)
	const [lancamentos, setLancamentos] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const loadLancamentos = async (dias = dias || null) => {
		const response = await getLancamentos(dias)
		setLancamentos(response)
	}

	useEffect(() => {
		loadLancamentos(1).then(() => setIsLoading(false))
	}, [])

	return (
		<ListContainer>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<>
					{lancamentos.length === 0 && (
						<Text style={{ textAlign: "center" }}>Nenhuma corrida hoje</Text>
					)}
					<List
						data={lancamentos}
						showsVerticalScrollIndicator={false}
						refreshControl={
							<RefreshControl
								refreshing={isLoading}
								onRefresh={() => loadLancamentos(1)}
							/>
						}
						renderItem={({ item }) => (
							<ItemArea
								onPress={() =>
									navigation.navigate(
										`${item.tipo === "receita" ? "Receita" : "Despesa"}`,
										item
									)
								}
								key={item.id}
							>
								<ItemContent>
									<Feather
										name={item.tipo === "receita" ? "arrow-up" : "arrow-down"}
										size={28}
										color={item.tipo === "receita" ? "#5CECC0" : "#ef233c"}
									/>
								</ItemContent>

								<ItemContent>
									<TitleText>Valor</TitleText>

									<Text>R$ {item.valor}</Text>
								</ItemContent>

								<ItemContent>
									<TitleText>
										{item.tipo === "receita" ? "Distância" : "Categoria"}
									</TitleText>

									<Text>
										{item.tipo === "receita"
											? `${item.distancia} Km`
											: item.categoria}
									</Text>
								</ItemContent>

								<ItemContent>
									<TitleText>Data</TitleText>
									<Text>{item.createdAt}</Text>
								</ItemContent>
							</ItemArea>
						)}
					/>
				</>
			)}
		</ListContainer>
	)
}
