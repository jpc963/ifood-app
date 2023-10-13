import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Mapa from "../../components/Mapa"
import Ionicon from "@expo/vector-icons/Ionicons"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"

import {
	Container,
	IconsArea,
	IconButton,
	ModalArea,
	AreaTouchable,
} from "./styles"

const AnimatedModalArea = Animated.createAnimatedComponent(ModalArea)

function Home({ navigation }) {
	const [modal, setModal] = useState(false)

	return (
		<Container>
			<AreaTouchable onTouchStart={() => setModal(false)}>
				<Mapa />

				<IconsArea>
					<IconButton onPress={() => navigation.openDrawer()}>
						<Ionicon
							name="grid-outline"
							size={38}
							color="#edf2f4"
						/>
					</IconButton>

					<IconButton onPress={() => setModal(true)}>
						<Ionicon
							name="cash-outline"
							size={42}
							color="#edf2f4"
							style={{ marginTop: -1 }}
						/>
					</IconButton>

					<IconButton onPress={() => navigation.navigate("Configurações")}>
						<Ionicon
							name="settings-outline"
							size={40}
							color="#edf2f4"
						/>
					</IconButton>
				</IconsArea>
			</AreaTouchable>

			{modal && <Modal />}
		</Container>
	)
}

export default Home

function Modal() {
	const navigation = useNavigation()

	return (
		<AnimatedModalArea
			entering={FadeIn}
			exiting={FadeOut}
		>
			<Ionicon
				name="arrow-up-circle"
				size={50}
				color="#5CECC0"
				onPress={() => navigation.navigate("Receita")}
			/>

			<Ionicon
				name="arrow-down-circle"
				size={50}
				color="#ef233c"
				onPress={() => navigation.navigate("Despesa")}
			/>
		</AnimatedModalArea>
	)
}
