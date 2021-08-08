import React, { useState } from 'react';
import { Text, View, SectionList, SafeAreaView, StyleSheet } from 'react-native';
import Btn from '../../Components/Buttons/Button'
import BtnSecond from '../../Components/Buttons/ButtonSecond'
import Item from '../../Components/TodoItem'

const DATA = [
	{
		title: "Main dishes",
		data: ["Pizza", "Burger", "Risotto"]
	},
	{
		title: "Drinks",
		data: ["Water", "Coke", "Beer"]
	},
]

const Main = ({ navigation }) => {
	// navigation.dispatch(
	// 	CommonActions.reset({
	// 		index: 0,
	// 		routes: [
	// 			{ name: 'ToDoList' }
	// 		],
	// 	})
	// );
	return (
		<View style={styles.container} >
			<SectionList
				sections={DATA}
				keyExtractor={(item, index) => item + index}
				// keyExtractor={toString(Date.now())}
				renderItem={({ item }) => <Item title={item} />}
				renderSectionHeader={({ section: { title } }) => (<Text>{title}</Text>)}
			/>
			<View style={styles.btns}>
				<Btn btnTitle={'Add List'} />
				<BtnSecond btnTitle={'Log Out'} />
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,

	},
	btns: {
		flexDirection: 'row',
		marginBottom: -20,
		justifyContent: 'space-between',

	}
})

export default Main;