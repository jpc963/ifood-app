import { useContext, useState } from "react"
import {
	Container,
	LabelInput,
	Input,
	InputsArea,
	Button,
	ButtonText,
	ButtonArea,
} from "./styles"
import { AuthContext } from "../../contexts/auth"
import { format } from "date-fns"

export default function Add({ navigation, route }) {
	const [form, setForm] = useState(route.params || {})
	const [editCorrida, setEditCorrida] = useState(!!route.params)
	const { addCorrida, updateCorrida } = useContext(AuthContext)

	const onClick = async () => {
		if (!form.valor || !form.distancia || !form.duracao) {
			alert("Preencha todos os campos")
			return
		}

		if (editCorrida) {
			await updateCorrida(form.id, form.valor, form.distancia, form.duracao)
			setForm({})
			navigation.goBack()
			return
		}

		const diaDeHoje = format(new Date(), "dd/MM/yyyy - HH:mm:ss")
		await addCorrida(form.valor, form.distancia, form.duracao, diaDeHoje)
		setForm({})
		navigation.navigate("Corridas")
	}

	return (
		<Container>
			<InputsArea>
				<LabelInput>Valor</LabelInput>
				<Input
					placeholder="R$ 0,00"
					onChangeText={(text) => setForm({ ...form, valor: text })}
					value={form.valor}
				/>

				<LabelInput>Distância</LabelInput>
				<Input
					placeholder="15 Km"
					onChangeText={(text) => setForm({ ...form, distancia: text })}
					value={form.distancia}
				/>

				<LabelInput>Duração</LabelInput>
				<Input
					placeholder="30 min"
					onChangeText={(text) => setForm({ ...form, duracao: text })}
					value={form.duracao}
				/>
			</InputsArea>

			<ButtonArea>
				<Button onPress={onClick}>
					<ButtonText>Salvar</ButtonText>
				</Button>

				<Button
					onPress={() => navigation.goBack()}
					bg="transparent"
				>
					<ButtonText color="#2b2d42">Cancelar</ButtonText>
				</Button>
			</ButtonArea>
		</Container>
	)
}
