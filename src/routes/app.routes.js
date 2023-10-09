import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "../pages/Home"
import CustomDrawer from "../components/CustomDrawer"
import Rodometro from "../pages/Rodometro"
import Corridas from "../pages/Corridas"
import Faturas from "../pages/Faturas"
import Estatisticas from "../pages/Estatisticas"
import Premium from "../pages/Premium"
import Configuracoes from "../pages/Configuracoes"
import Add from "../pages/Add"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const routes = {
	names: [
		"Rodômetro",
		"Corridas",
		"Faturas",
		"Estatísticas",
		"Premium",
		"Configurações",
		"Add",
	],
	components: [
		Rodometro,
		Corridas,
		Faturas,
		Estatisticas,
		Premium,
		Configuracoes,
		Add,
	],
}

function MyDrawer() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
			/>
		</Drawer.Navigator>
	)
}

function AppRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="MyDrawer"
				component={MyDrawer}
			/>

			{routes.names.map((name, index) => (
				<Stack.Screen
					key={index}
					name={name}
					component={routes.components[index]}
				/>
			))}
		</Stack.Navigator>
	)
}

export default AppRoutes
