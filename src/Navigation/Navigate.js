import React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../Containers/Auth';
import Reg from '../Containers/Registration';
import ToDoList from '../Containers/ToDoList';

const Stack = createStackNavigator()

export default function Navigate() {
	return (<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name='Auth' component={Auth} options={{title: 'Авторизация',}}/>
			<Stack.Screen name='Reg' component={Reg} options={{title: 'Регистрация',}}/>
			<Stack.Screen name='ToDoList' component={ToDoList} options={{title: 'Список дел',}}/>
			
			{/* <Stack.Screen name='ToDo' component={ToDoList} options={{title: 'Список дел',}}/> */}
		</Stack.Navigator>
	</NavigationContainer>
	)
}