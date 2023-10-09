import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #edf2f4;
`

export const InputsArea = styled.View`
	width: 80%;
	padding: 10px 0;
	gap: 7px;
	margin-bottom: 50px;
`

export const LabelInput = styled.Text`
	font-size: 17px;
	color: #2b2d42;
`

export const Input = styled.TextInput`
	border-radius: 5px;
	padding: 5px;
	background-color: #fff;
`

export const ButtonArea = styled.View`
	width: 80%;
	gap: 10px;
`

export const Button = styled.TouchableOpacity`
	padding: 10px;
	border-radius: 5px;
	background-color: ${({ bg }) => bg || "#2b2d42"};
	align-items: center;
	justify-content: center;
`

export const ButtonText = styled.Text`
	font-size: 17px;
	color: ${({ color }) => color || "#fff"};
`
