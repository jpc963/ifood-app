import { useContext, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from "../../contexts/auth"

import {
	Container,
	LogoArea,
	Logo,
	Button,
	ButtonText,
	ButtonRegister,
	ButtonRegisterText,
	GoogleButton,
	GoogleButtonText,
	GoogleLogo,
	Linha,
	InputArea,
	InputText,
} from "./styles"

export default function Login() {
	const [form, setForm] = useState({
		email: "teste@teste.com",
		password: "221210",
	})
	const { login } = useContext(AuthContext)
	const [entrar, setEntrar] = useState(false)
	const navigation = useNavigation()

	function handleChange(name, value) {
		setForm({ ...form, [name]: value })
	}

	return (
		<Container>
			<Logo source={require("../../assets/images/logo.png")} />

			{entrar && (
				<>
					<InputArea style={{ marginBottom: 15, marginTop: -49 }}>
						<InputText
							placeholder="E-mail"
							onChangeText={(text) => handleChange("email", text)}
						/>
					</InputArea>

					<InputArea style={{ marginBottom: 15 }}>
						<InputText
							placeholder="Senha"
							secureTextEntry={true}
							onChangeText={(text) => handleChange("password", text)}
						/>
					</InputArea>
				</>
			)}

			<Button
				onPress={
					!entrar
						? () => setEntrar(true)
						: () => login(form.email, form.password)
				}
			>
				<ButtonText>Entrar</ButtonText>
			</Button>

			<ButtonRegister onPress={() => navigation.navigate("Register")}>
				<ButtonRegisterText>Não possui uma conta?</ButtonRegisterText>
			</ButtonRegister>

			<Linha />

			<GoogleButton>
				<GoogleLogo source={require("../../assets/images/google-logo2x.png")} />
				<GoogleButtonText>Entrar com Google</GoogleButtonText>
			</GoogleButton>
		</Container>
	)
}
