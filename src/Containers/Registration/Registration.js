import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Input from '../../Components/Inputs/Input'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import Label from '../../Components/Labels/Label'
import Link from '../../Components/Links/Link'
import Btn from '../../Components/Buttons/Button'



const Reg = ({ navigation }) => {
	// const [placeholder, setPlaceholder] = useState('example@mail.com');

	return (
		<View style={styles.container}>
			<Label text={'Введите почту'} />
			<Input placeholder={'example@mail.com'} />
			<Label text={'Введите пароль'} />
			<PasswordInput placeholder={'******'} />
			<Btn btnTitle={'Создать аккаунт'} nav={navigation} navTo={'ToDoList'} />
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

export default Reg;
