import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Mapa from "../../components/Mapa"
import Feather from "@expo/vector-icons/Feather"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"

import {
	Container,
	IconsArea,
	IconButton,
	ModalArea,
	AreaTouchable,
	IconModal,
} from "./styles"
import React from "react"

const AnimatedModalArea = Animated.createAnimatedComponent(ModalArea)

function Home({ navigation }) {
	const [modal, setModal] = useState(false)

	return (
		<Container>
			<AreaTouchable onTouchStart={() => setModal(false)}>
				<Mapa />

				<IconsArea>
					<IconButton onPress={() => navigation.openDrawer()}>
						<Feather
							name="menu"
							size={36}
							color="#2B2D42"
						/>
					</IconButton>

					<IconButton onPress={() => setModal(true)}>
						<Feather
							name="dollar-sign"
							size={33}
							color="#2B2D42"
						/>
					</IconButton>

					<IconButton onPress={() => navigation.navigate("Configurações")}>
						<Feather
							name="settings"
							size={33}
							color="#2B2D42"
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
			<IconModal>
				<Feather
					name="plus-circle"
					size={40}
					color="#5CECC0"
					onPress={() => navigation.navigate("Receita")}
				/>
			</IconModal>

			<IconModal>
				<Feather
					name="minus-circle"
					size={40}
					color="#ef233c"
					onPress={() => navigation.navigate("Despesa")}
				/>
			</IconModal>
		</AnimatedModalArea>
	)
}
