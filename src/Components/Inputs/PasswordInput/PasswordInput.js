import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styles from '../style'

const PasswordInput = ({ placeholder }) => {
	return (

		<TextInput style={styles.input} placeholder={placeholder} autoCorrect={false} textContentType='password' secureTextEntry={true} />
		//textContentType='password'
		//secureTextEntry={true}
	)
}



export default PasswordInput;