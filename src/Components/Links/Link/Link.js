import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Link = ({ text, nav, navTo }) => {
	return (
		<Text onPress={()=>nav.navigate(navTo)} style={styles.label}>{text}</Text>
	)
}

const styles = StyleSheet.create({
	label: {
		color: 'blue',
		fontSize: 16,
		marginBottom: 10,
		textAlign: 'right',
	}
})

export default Link;