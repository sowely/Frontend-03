import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Input from '../../Components/Inputs/Input'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import Label from '../../Components/Labels/Label'
import Btn from '../../Components/Buttons/Button'
import BtnSecond from '../../Components/Buttons/ButtonSecond'



const Auth = ({ navigation }) => {
	// const [placeholder, setPlaceholder] = useState('example@mail.com');

	return (
		<View style={styles.container}>
			<Label text={'Enter email'} />
			<Input placeholder={'example@mail.com'} />
			<Label text={'Enter password'} />
			<PasswordInput placeholder={'******'} />
			<Btn btnTitle={'Sign In'} nav={navigation} navTo={'ToDoList'} />
			<BtnSecond btnTitle={'Sign Up'} nav={navigation} navTo={'Reg'} />
		</View>
	)
}

// styles={styles.container} 
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},

})

export default Auth;
