import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const AreaTouchable = styled.View`
	width: 100%;
	height: 100%;
`

export const IconsArea = styled.View`
	height: 60px;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 10px 40px;
	background-color: #2b2d42;
`

export const IconButton = styled.TouchableOpacity``

export const ModalArea = styled.View`
	flex-direction: row;
	position: absolute;
	bottom: 65px;
	gap: 15px;
`
