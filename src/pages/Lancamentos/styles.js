import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	background-color: #edf2f4;
`

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: #2b2d42;
	width: 100%;
	height: 80px;
	padding: 0 10px;
`

export const Button = styled.TouchableOpacity``

export const HeaderText = styled.Text`
	color: #fff;
	font-size: 18px;
`

export const Text = styled.Text`
	color: rgba(43, 45, 66, 0.75);
	font-size: 14px;
`

export const DropdownArea = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 40px;
	background-color: #fff;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
