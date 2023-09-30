import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "../pages/Home"
import CustomDrawer from "../components/CustomDrawer"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

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
		</Stack.Navigator>
	)
}

export default AppRoutes
