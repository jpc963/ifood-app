import { useContext } from "react"
import { DrawerContentScrollView } from "@react-navigation/drawer"
import { AuthContext } from "../../contexts/auth"

import { ProfilePicture } from "../ProfilePicture"

import { Container, HeaderArea, HeaderText, Button, ButtonText, Text } from "./styles"

export default function CustomDrawer({ navigation }) {
	const { user, logout } = useContext(AuthContext)
	const routes = {
		usuario: ["Lançamentos", "Estatísticas", "Faturas"],
		app: ["Premium", "Configurações"],
	}

	return (
		<DrawerContentScrollView style={{ backgroundColor: "#EDF2F4" }}>
			<Container>
				<HeaderArea>
					<ProfilePicture />
				</HeaderArea>

				<HeaderText>Olá, {user.nome}</HeaderText>

				{routes.usuario.map((button, index) => (
					<Button
						key={index}
						onPress={() => navigation.navigate(routes.usuario[index])}
					>
						<ButtonText>{button}</ButtonText>
					</Button>
				))}

				<HeaderText style={{ marginTop: 35 }}>Aplicativo</HeaderText>

				{routes.app.map((button, index) => (
					<Button
						key={index}
						onPress={() => navigation.navigate(routes.app[index])}
					>
						<ButtonText>{button}</ButtonText>
					</Button>
				))}

				<Button
					onPress={() => navigation.navigate("Perfil")}
					bg={"#2B2D42"}
					style={{ marginTop: 136 }}
				>
					<ButtonText color={"#EDF2F4"}>Editar perfil</ButtonText>
				</Button>

				<Button
					onPress={() => logout()}
					bg={"transparent"}
				>
					<ButtonText>Sair</ButtonText>
				</Button>

				<Text>Version 1.0.0</Text>
			</Container>
		</DrawerContentScrollView>
	)
}
