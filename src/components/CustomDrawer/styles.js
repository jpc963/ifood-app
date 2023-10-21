import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	align-items: center;
`

export const HeaderArea = styled.View`
	width: 100%;
	height: 141px;
	align-items: center;
	margin-top: 27px;
`

export const HeaderText = styled.Text`
	color: #2b2d42;
	text-align: center;
	font-size: 18px;
	font-weight: 400;
	border-bottom-width: 1.3px;
	border-bottom-color: #2b2d42;
	width: 200px;
	padding-bottom: 4px;
`

export const Button = styled.TouchableOpacity`
	width: 200px;
	height: 40px;
	background-color: ${(props) => (props?.bg ? props.bg : "#fff")};
	border-radius: 5px;
	margin-top: 15px;
	align-items: center;
	justify-content: center;
`

export const ButtonText = styled.Text`
	text-align: center;
	font-size: 17px;
	font-weight: 400;
	color: ${(props) => (props?.color ? props.color : "#2b2d42")};
`

export const Text = styled.Text`
	margin-top: 11px;
`
