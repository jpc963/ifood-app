import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth"

import { Footer } from "../../components/Footer"
import { Filtro } from "./_components/Filtro"
import { ListLancamentos } from "./_components/ListLancamentos"
import { Ionicons } from "@expo/vector-icons"

import {
	Container,
	Header,
	Button,
	HeaderText,
	Text,
	DropdownArea,
} from "./styles"

export default function Lancamentos({ navigation }) {
	const { getLancamentos } = useContext(AuthContext)
	const [lancamentos, setLancamentos] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [showDropdown, setShowDropdown] = useState(false)
	const [ascendente, setAscendente] = useState(true)

	const loadLancamentos = async (dias = dias || null) => {
		const response = await getLancamentos(dias)
		setLancamentos(response)
	}

	useEffect(() => {
		loadLancamentos(1).then(() => setIsLoading(false))
	}, [])

	const orderByValor = () => {
		if (ascendente) {
			setLancamentos(lancamentos.sort((a, b) => a.valor - b.valor))
		} else {
			setLancamentos(lancamentos.sort((a, b) => b.valor - a.valor))
		}

		setAscendente(!ascendente)
	}

	return (
		<Container>
			<Header>
				<Button onPress={() => loadLancamentos(1)}>
					<HeaderText>Hoje</HeaderText>
				</Button>

				<Button onPress={() => loadLancamentos(7)}>
					<HeaderText>7 dias</HeaderText>
				</Button>

				<Button onPress={() => loadLancamentos()}>
					<HeaderText>Todas</HeaderText>
				</Button>

				<Filtro
					dropdown={showDropdown}
					setDropdown={setShowDropdown}
				/>
			</Header>

			{showDropdown && (
				<DropdownArea>
					<Button
						onPress={() => orderByValor()}
						style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
					>
						<Text>Valor</Text>
						<Ionicons
							name={ascendente ? "chevron-up-outline" : "chevron-down-outline"}
							color={"rgba(43, 45, 66, 0.75)"}
						/>
					</Button>
				</DropdownArea>
			)}

			<ListLancamentos
				lancamentos={lancamentos}
				loadLancamentos={loadLancamentos}
				isLoading={isLoading}
			/>

			<Footer
				navigation={navigation}
				novaReceitaButton
			/>
		</Container>
	)
}
