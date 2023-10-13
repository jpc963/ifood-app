import styled from "styled-components/native"

export const ListContainer = styled.View`
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
`

export const List = styled.FlatList`
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
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
