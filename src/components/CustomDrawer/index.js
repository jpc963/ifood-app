import { useContext } from "react"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { AuthContext } from "../../contexts/auth"

import {
	Container,
	HeaderArea,
	Logo,
	HeaderText,
	Button,
	ButtonText,
} from "./styles"

export default function CustomDrawer({ navigation }) {
	const { logout, user } = useContext(AuthContext)
	const buttonsUsuario = ["Corridas", "Preços", "Faturas", "Estatísticas"]
	const buttonsApp = ["Premium", "Configurações"]

	return (
		<DrawerContentScrollView style={{ backgroundColor: "#EDF2F4" }}>
			<Container>
				<HeaderArea>
					<Logo source={require("../../assets/images/logo.png")} />
				</HeaderArea>

				<HeaderText>Olá, {user.email}</HeaderText>

				{buttonsUsuario.map((button) => (
					<Button>
						<ButtonText>{button}</ButtonText>
					</Button>
				))}

				<HeaderText style={{ marginTop: 35 }}>Aplicativo</HeaderText>

				{buttonsApp.map((button) => (
					<Button>
						<ButtonText>{button}</ButtonText>
					</Button>
				))}

				<DrawerItem
					label="Sair"
					onPress={() => logout()}
				/>
			</Container>
		</DrawerContentScrollView>
	)
}
