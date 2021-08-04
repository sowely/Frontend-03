import React, { useState } from 'react';
import { Text, View, SectionList, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationActions } from '@react-navigation/stack';
import { StackActions, CommonActions } from '@react-navigation/native';
import Btn from '../../Components/Buttons/Button'



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

// const Item = ({ title }) => (
// 	<View>
// 		<Text>{title}</Text>
// 	</View>
// );

const ToDoList = ({ navigation }) => {
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
				<Btn btnTitle={'Создать новое дело'} />
				<Btn btnTitle={'Создать новый список дел'} />
				<Btn btnTitle={'Сменить аккаунт'} />
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		// justifyContent: 'space-between',

	},
	btns: {

	}
})

export default ToDoList;