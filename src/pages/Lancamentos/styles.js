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

export const ListContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 10px;
	flex-direction: column;
`

export const List = styled.FlatList`
	flex: 1;
	width: 100%;
`

export const ItemArea = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 0px 15px;
	margin-bottom: 10px;
	border-radius: 5px;
	background-color: #fff;
`

export const ItemContent = styled.View`
	flex-direction: column;
	align-items: center;
	gap: 3px;
`

export const TitleText = styled.Text`
	color: #2b2d42;
	font-size: 16px;
`

export const Text = styled.Text`
	color: rgba(43, 45, 66, 0.75);
	font-size: 14px;
`
