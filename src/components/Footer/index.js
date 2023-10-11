import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const Footer = ({ navigation, novaReceitaButton }) => {
	return (
		<View style={styles.footer}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text style={styles.text}>Voltar</Text>
			</TouchableOpacity>

			{novaReceitaButton && (
				<TouchableOpacity onPress={() => navigation.navigate("Receita")}>
					<Text style={styles.text}>Nova corrida</Text>
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	footer: {
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#2b2d42",
		width: "100%",
		height: 60,
	},
	text: {
		color: "#fff",
		fontSize: 18,
		marginHorizontal: 20,
	},
})
