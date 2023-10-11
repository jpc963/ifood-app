import { Image } from "./styles"

export const Icon = ({ despesa }) => {
	return (
		<Image
			source={
				despesa
					? require("../../assets/images/despesa-icon.png")
					: require("../../assets/images/receita-icon.png")
			}
		/>
	)
}
