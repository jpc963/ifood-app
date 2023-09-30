import styled from "styled-components/native"

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	background-color: #edf2f4;
	justify-content: center;
`

export const LeftArrowArea = styled.TouchableOpacity`
	position: absolute;
	top: 30px;
	left: 4px;
`

export const LeftArrow = styled.Image`
	width: 48px;
	height: 48px;
`

export const Logo = styled.Image`
	margin-bottom: 40px;
`

export const Button = styled.TouchableOpacity`
	background-color: #0081e4;
	width: 214px;
	height: 50px;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
`

export const ButtonText = styled.Text`
	color: #fff;
	font-size: 23px;
	font-weight: 400;
`

export const ButtonRegister = styled.TouchableOpacity``

export const ButtonRegisterText = styled.Text`
	color: #2b2d42;
	font-size: 13px;
	font-weight: 400;
	margin-top: 8px;
`

export const InputArea = styled.View`
	background-color: #fff;
	width: 80%;
	height: 50px;
	border-radius: 5px;
	margin-bottom: 15px;
`

export const InputText = styled.TextInput`
	flex: 1;
	padding-left: 20px;
	font-size: 16px;
	color: #2b2d42;
`
