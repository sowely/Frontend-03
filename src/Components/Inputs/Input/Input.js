import React from 'react';
import { TextInput } from 'react-native';
import styles from '../style'

const Input = ({ placeholder }) => {
	return (
		<TextInput
			style={styles.input}
			placeholder={placeholder}
			autoCorrect={false}
			autoCapitalize='none'
		></TextInput>

	)
}



export default Input;