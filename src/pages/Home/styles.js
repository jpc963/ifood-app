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
	flex: 1;
	max-height: 60px;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	padding: 10px 50px;
	background-color: #edf2f4;
	border-color: #2b2d42;
	border-top-width: 0.5px;
`

export const IconButton = styled.TouchableOpacity``

export const ModalArea = styled.View`
	flex-direction: row;
	position: absolute;
	bottom: 65px;
	gap: 15px;
`

export const IconModal = styled.TouchableOpacity`
	background-color: #edf2f4;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	justify-content: center;
	align-items: center;
`
