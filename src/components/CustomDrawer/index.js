import { useContext, useEffect, useState } from "react"
import { DrawerContentScrollView } from "@react-navigation/drawer"
import { AuthContext } from "../../contexts/auth"
import * as ImagePicker from "expo-image-picker"
import { storage } from "../../../firebaseConfig"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import {
	Container,
	HeaderArea,
	HeaderText,
	Button,
	ButtonText,
	Text,
	UploadButton,
	Logo,
} from "./styles"

export default function CustomDrawer({ navigation }) {
	const { user, logout } = useContext(AuthContext)
	const [profilePicture, setProfilePicture] = useState(null)
	const routes = {
		usuario: ["Lançamentos", "Estatísticas", "Faturas"],
		app: ["Premium", "Configurações"],
	}

	useEffect(() => {
		const getProfilePicture = async () => {
			try {
				const url = await getDownloadURL(ref(storage, `users/${user.uid}`))
				setProfilePicture(url)
			} catch (error) {
				console.log("Não há imagem de perfil")
			}
		}

		getProfilePicture()
	}, [user.uid])

	const pickImage = async () => {
		await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [3, 3],
			quality: 0.5,
		}).then((response) => {
			if (!response.canceled) {
				setProfilePicture(response.assets[0].uri)
				uploadImageFirebase(response)
			}
		})
	}

	const uploadImageFirebase = async (response) => {
		const fileSource = await fetch(response.assets[0].uri)
		return await uploadBytes(
			ref(storage, `users/${user.uid}`),
			await fileSource.blob()
		)
	}

	return (
		<DrawerContentScrollView style={{ backgroundColor: "#EDF2F4" }}>
			<Container>
				<HeaderArea>
					{profilePicture ? (
						<Logo source={{ uri: profilePicture }} />
					) : (
						<UploadButton onPress={() => pickImage()}>
							<MaterialCommunityIcons
								name="camera-plus-outline"
								size={40}
								color={"#EF233C"}
							/>
						</UploadButton>
					)}
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
					onPress={() => {}}
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
