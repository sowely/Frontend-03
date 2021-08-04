import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Item = ({ title }) => {
	return (
		<Text style={styles.text}>{title}</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'red',
		fontSize:16,
		marginVertical: 10,
	}
})

export default Item;