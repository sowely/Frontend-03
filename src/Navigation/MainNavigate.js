import React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../Containers/Auth';
import Reg from '../Containers/Registration';
import Main from '../Containers/Main';

const Stack = createStackNavigator()

export default function MainNavigate() {
	return (<NavigationContainer>
		<Stack.Navigator>
			{/* <Stack.Screen name='Auth' component={Auth} options={{title: 'Auth',}}/> */}
			{/* <Stack.Screen name='Reg' component={Reg} options={{title: 'Reg',}}/> */}
			<Stack.Screen name='Main' component={Main} options={{
				title: 'Todo Lists',
				// headerTransparent: true,
				// headerTitleContainerStyle: {
				// 	margin: 60,
				// }
			}} />

			{/* <Stack.Screen name='ToDo' component={ToDoList} options={{title: 'Список дел',}}/> */}
		</Stack.Navigator>
	</NavigationContainer>
	)
}