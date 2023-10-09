import Mapa from "../../components/Mapa"

import { Container, Icon, IconsArea, IconButton, MapArea } from "./styles"

function Home({ navigation }) {
	return (
		<Container>
			<Mapa />
			{/* <MapArea /> */}

			<IconsArea>
				<IconButton onPress={() => navigation.openDrawer()}>
					<Icon source={require("../../assets/images/menu-icon.png")} />
				</IconButton>

				<IconButton onPress={() => navigation.navigate("Add")}>
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
