import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #edf2f4;
	align-items: center;
	justify-content: center;
`

export const Separator = styled.View`
	height: 0.7px;
	width: 70%;
	background-color: #2b2d42;
	margin-top: 20px;
	margin-bottom: 20px;
`

export const HeaderArea = styled.View`
	width: 100%;
	align-items: center;
`

export const ChangePicture = styled.TouchableOpacity`
	margin-top: 7px;
`

export const NameText = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: #2b2d42;
`
