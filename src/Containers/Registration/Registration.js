import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Input from '../../Components/Inputs/Input'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import Label from '../../Components/Labels/Label'
import Link from '../../Components/Links/Link'
import Btn from '../../Components/Buttons/Button'
import BtnSecond from '../../Components/Buttons/ButtonSecond'



const Reg = ({ navigation }) => {
	// const [placeholder, setPlaceholder] = useState('example@mail.com');

	return (
		<View style={styles.container}>
			<Label text={'Enter your name'} />
			<Input placeholder={'Billy Herrington'} />
			<Label text={'Enter your email'} />
			<Input placeholder={'example@mail.com'} />
			<Label text={'Enter password'} />
			<PasswordInput placeholder={'******'} />
			<Btn btnTitle={'Sign Up!'} nav={navigation} navTo={'ToDoList'} />
			<BtnSecond btnTitle={'Sign In'} nav={navigation} navTo={'Auth'} />
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
