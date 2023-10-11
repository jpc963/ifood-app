import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { format } from "date-fns"

import {
	Container,
	LabelInput,
	Input,
	InputsArea,
	Button,
	ButtonText,
	ButtonArea,
} from "./styles"
import { Icon } from "../MoneyIcon"

export default function Despesa({ navigation, route }) {
	const [form, setForm] = useState(route.params || {})
	const [editDespesa, setEditDespesa] = useState(!!route.params)
	const { addDespesa, updateDespesa } = useContext(AuthContext)

	const onClick = async () => {
		if (!form.valor || !form.descricao || !form.categoria) {
			alert("Preencha todos os campos")
			return
		}

		if (editDespesa) {
			await updateDespesa(form.id, form.valor, form.descricao, form.categoria)
			setForm({})
			navigation.goBack()
			return
		}

		const diaDeHoje = format(new Date(), "dd/MM/yyyy - HH:mm:ss")
		await addDespesa(form.valor, form.descricao, form.categoria, diaDeHoje)
		setForm({})
		navigation.navigate("Home")
	}

	return (
		<Container>
			<Icon despesa />

			<InputsArea>
				<LabelInput>Valor</LabelInput>
				<Input
					placeholder="R$ 0,00"
					onChangeText={(text) => setForm({ ...form, valor: text })}
					value={form.valor}
				/>

				<LabelInput>Descrição</LabelInput>
				<Input
					placeholder="Troca de óleo, pneu..."
					onChangeText={(text) => setForm({ ...form, descricao: text })}
					value={form.descricao}
				/>

				<LabelInput>Categoria</LabelInput>
				<Input
					placeholder="Manutenção..."
					onChangeText={(text) => setForm({ ...form, categoria: text })}
					value={form.categoria}
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
