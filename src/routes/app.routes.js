import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "../pages/Home"
import CustomDrawer from "../components/CustomDrawer"
import Rodometro from "../pages/Rodometro"
import Lancamentos from "../pages/Lancamentos"
import Faturas from "../pages/Faturas"
import Estatisticas from "../pages/Estatisticas"
import Premium from "../pages/Premium"
import Configuracoes from "../pages/Configuracoes"

import Receita from "../components/Receita"
import Despesa from "../components/Despesa"
import Perfil from "../pages/Perfil"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const routes = {
	names: [
		"Rodômetro",
		"Lançamentos",
		"Faturas",
		"Estatísticas",
		"Premium",
		"Configurações",
		"Perfil",
	],
	components: [Rodometro, Lancamentos, Faturas, Estatisticas, Premium, Configuracoes, Perfil],
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

			<Stack.Group
				screenOptions={{
					presentation: "modal",
				}}
			>
				<Stack.Screen
					name="Receita"
					component={Receita}
				/>

				<Stack.Screen
					name="Despesa"
					component={Despesa}
				/>
			</Stack.Group>
		</Stack.Navigator>
	)
}

export default AppRoutes
