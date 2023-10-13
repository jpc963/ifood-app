import { useState } from "react"

import { Footer } from "../../components/Footer"
import { Filtro } from "./_components/Filtro"
import { ListLancamentos } from "./_components/ListLancamentos"

import {
	Container,
	Header,
	Button,
	HeaderText,
	Text,
	DropdownArea,
} from "./styles"

export default function Lancamentos({ navigation }) {
	const [showDropdown, setShowDropdown] = useState(false)

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
					<Button>
						<Text>Valor</Text>
					</Button>

					<Button>
						<Text>Distância</Text>
					</Button>

					<Button>
						<Text>Data</Text>
					</Button>
				</DropdownArea>
			)}

			<ListLancamentos />

			<Footer
				navigation={navigation}
				novaReceitaButton
			/>
		</Container>
	)
}
