import Mapa from "../../components/Mapa"

import { Container, Icon, IconsArea, IconButton } from "./styles"

function Home({ navigation }) {
	return (
		<Container>
			<Mapa />

			<IconsArea>
				<IconButton onPress={() => navigation.openDrawer()}>
					<Icon source={require("../../assets/images/menu-icon.png")} />
				</IconButton>

				<IconButton>
					<Icon source={require("../../assets/images/add.png")} />
				</IconButton>

				<IconButton>
					<Icon
						source={require("../../assets/images/config.png")}
						width={40}
					/>
				</IconButton>
			</IconsArea>
		</Container>
	)
}

export default Home
