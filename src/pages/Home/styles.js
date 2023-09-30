import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const MapArea = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
`

export const IconsArea = styled.View`
	flex-direction: row;
	width: 100%;
	padding: 5px 50px;
	align-items: center;
	justify-content: space-around;
	background-color: #edf2f4;
`

export const IconButton = styled.TouchableOpacity``

export const Icon = styled.Image.attrs({
	resizeMode: "contain",
})`
	width: ${(props) => (props.width ? props.width : "44")}px;
	height: ${(props) => (props.height ? props.height : "44")}px;
`
