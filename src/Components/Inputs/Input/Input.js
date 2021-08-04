import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const Input = ({ placeholder }) => {
	return (
		<TextInput style={styles.input} placeholder={placeholder} autoCorrect={false}></TextInput>

	)
}

const styles = StyleSheet.create({
	input: {
		borderColor: 'black', //black
		borderWidth: 1,
		paddingHorizontal: 20,
		borderRadius: 50,
		fontSize: 16,
		marginBottom: 20,
	}
})

export default Input;