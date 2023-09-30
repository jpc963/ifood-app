import styled from "styled-components/native"

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #edf2f4;
`

export const Logo = styled.Image`
	margin-bottom: 140px;
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

export const Linha = styled.View`
	width: 80%;
	height: 1px;
	background-color: #2b2d42;
	margin-top: 26px;
	margin-bottom: 26px;
`

export const GoogleButton = styled.TouchableOpacity`
	background-color: #fff;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 5px 10px 4px 10px;
	border-radius: 10px;
	gap: 9px;
`

export const GoogleLogo = styled.Image`
	width: 28px;
	height: 28px;
`

export const GoogleButtonText = styled.Text`
	color: #2b2d42;
	font-size: 14px;
	font-weight: 600;
`

export const InputArea = styled.View`
	background-color: #fff;
	width: 80%;
	height: 50px;
	border-radius: 5px;
`

export const InputText = styled.TextInput`
	flex: 1;
	padding-left: 20px;
	font-size: 16px;
	color: #2b2d42;
`
