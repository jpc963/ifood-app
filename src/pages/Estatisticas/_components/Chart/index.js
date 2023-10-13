import { View, Text } from "react-native"
import { PieChart } from "react-native-gifted-charts"
import { ActivityIndicator } from "react-native"

export const Chart = ({ pieData, loading, valor }) => {
	const renderDot = (color) => {
		return (
			<View
				style={{
					width: 10,
					height: 10,
					borderRadius: 5,
					backgroundColor: color,
					marginRight: 10,
				}}
			/>
		)
	}

	const renderLegendComponent = () => {
		return (
			<>
				{pieData && (
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							marginBottom: 10,
							gap: 20,
						}}
					>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							{renderDot("#ef233c")}
							<Text style={{ color: "#2b2d42" }}>
								Despesa: {pieData[1].value} %
							</Text>
						</View>

						<View style={{ flexDirection: "row", alignItems: "center" }}>
							{renderDot("#0081E4")}
							<Text style={{ color: "#2b2d42" }}>
								Receita: {pieData[0].value} %
							</Text>
						</View>
					</View>
				)}
			</>
		)
	}

	return (
		<>
			<View
				style={{
					margin: 20,
					marginTop: 50,
					padding: 16,
					borderRadius: 20,
					backgroundColor: "#fff",
				}}
			>
				<Text style={{ color: "#2b2d42", fontSize: 20, fontWeight: "500" }}>
					Lançamentos
				</Text>

				<View style={{ padding: 20, alignItems: "center" }}>
					{loading && <ActivityIndicator />}
					{!loading && (
						<PieChart
							data={pieData}
							donut
							sectionAutoFocus
							radius={90}
							innerRadius={45}
							centerLabelComponent={() => {
								return (
									<View
										style={{ justifyContent: "center", alignItems: "center" }}
									>
										<Text style={{ fontSize: 20, color: "#2b2d42" }}>
											{valor > 0 ? "R$" : "-R$"} {Math.abs(valor)}
										</Text>
									</View>
								)
							}}
						/>
					)}
				</View>

				{renderLegendComponent()}
			</View>
		</>
	)
}
