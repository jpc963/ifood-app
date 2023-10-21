import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Footer } from "../../components/Footer"
import { ProfilePicture } from "../../components/ProfilePicture"

import { Container, HeaderArea, NameText, ChangePicture, Separator } from "./styles"

export default function Perfil({ navigation }) {
	const { user, pickImage } = useContext(AuthContext)

	return (
		<Container>
			<HeaderArea>
				<ProfilePicture />

				<ChangePicture onPress={() => pickImage()}>
					<MaterialCommunityIcons
						name="camera-retake-outline"
						size={32}
						color={"#2b2d42"}
					/>
				</ChangePicture>
			</HeaderArea>

			<Separator />

			<NameText>{user.nome}</NameText>

			<Footer navigation={navigation} />
		</Container>
	)
}
