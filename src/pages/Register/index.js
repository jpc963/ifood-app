import { useState, useContext } from "react"
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
	InputArea,
	InputText,
	LeftArrowArea,
	LeftArrow,
} from "./styles"

export default function Register() {
	const [form, setForm] = useState({})
	const inputs = [
		{
			placeholder: "Nome",
			name: "nome",
		},
		{
			placeholder: "Usuário",
			name: "usuario",
		},
		{
			placeholder: "E-mail",
			name: "email",
		},
		{
			placeholder: "Senha",
			name: "password",
		},
		{
			placeholder: "Repita sua senha",
			name: "passwordConfirm",
		},
	]
	const navigation = useNavigation()
	const { register } = useContext(AuthContext)

	const signUp = async () => {
		if (
			form.nome === "" ||
			form.usuario === "" ||
			form.email === "" ||
			form.password === "" ||
			form.passwordConfirm === ""
		) {
			alert("Preencha todos os campos")
		} else if (form.password !== form.passwordConfirm) {
			alert("As senhas não conferem")
		} else {
			try {
				await register(form.nome, form.usuario, form.email, form.password)
			} catch (error) {
				console.log(error)
			}
		}
	}

	function handleInputChange(value, name) {
		setForm({
			...form,
			[name]: value,
		})
	}

	return (
		<Container>
			<LeftArrowArea onPress={() => navigation.navigate("Login")}>
				<LeftArrow source={require("../../assets/images/left-arrow.png")} />
			</LeftArrowArea>

			<Logo source={require("../../assets/images/logo.png")} />

			{inputs.map((input, index) => (
				<InputArea key={index}>
					<InputText
						placeholder={input.placeholder}
						onChangeText={(text) => handleInputChange(text, input.name)}
						passwordRules={
							input.placeholder === "Senha" ? "minlength: 6; maxlength: 8;" : ""
						}
						secureTextEntry={
							input.placeholder === "Senha" ||
							input.placeholder === "Repita sua senha"
								? true
								: false
						}
					/>
				</InputArea>
			))}

			<Button onPress={() => signUp()}>
				<ButtonText>Cadastrar</ButtonText>
			</Button>

			<ButtonRegister onPress={() => navigation.navigate("Login")}>
				<ButtonRegisterText>Já possui uma conta?</ButtonRegisterText>
			</ButtonRegister>
		</Container>
	)
}
