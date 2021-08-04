import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = ({ text }) => {
	return (
		<Text style={styles.label}>{text}</Text>
	)
}

const styles = StyleSheet.create({
	label: {
		color: 'black',
		fontSize: 16,
		marginBottom: 10,
		marginLeft: 20,
	}
})

export default Label;