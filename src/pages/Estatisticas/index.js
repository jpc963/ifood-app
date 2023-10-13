import { useContext, useEffect, useState } from "react"

import { AuthContext } from "../../contexts/auth"
import { Footer } from "../../components/Footer"
import { Chart } from "./_components/Chart"

import { Container } from "./styles"

export default function Estatisticas({ navigation }) {
	const { getValorTotalLancamentos } = useContext(AuthContext)
	const [pieData, setPieData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [valor, setValor] = useState(null)

	useEffect(() => {
		const getPieData = async () => {
			await getValorTotalLancamentos().then((response) => {
				setValor(response.valorTotal)
				setPieData([
					{
						value: response.porcentagemReceita,
						color: "#0081E4",
						legend: "Receita",
						focused: response.valorTotal > 0 ? true : false,
					},
					{
						value: response.porcentagemDespesa,
						color: "#ef233c",
						legend: "Despesa",
						focused: response.valorTotal < 0 ? true : false,
					},
				])
			})

			setLoading(false)
		}

		getPieData()
	}, [])
	return (
		<Container>
			<Chart
				pieData={pieData}
				loading={loading}
				valor={valor}
			/>

			<Footer navigation={navigation} />
		</Container>
	)
}
