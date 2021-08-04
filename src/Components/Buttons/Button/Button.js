import React from 'react';
import { Text, Button, TouchableHighlight, StyleSheet } from 'react-native';

const Btn = ({ btnTitle, nav, navTo }) => {
	// console.log(nav)
	return (
		// <Button title={btnTitle} style={styles.btn}/>
		<TouchableHighlight underlayColor='#aaa' onPress={() => nav.navigate(navTo)} style={styles.btn}>
			<Text style={styles.text}>{btnTitle}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	btn: {
		borderRadius: 50,
		backgroundColor: '#ccc',
		flexShrink: 0,
		marginBottom: 10,

	},
	text: {
		textAlign: 'center',
		marginVertical: 15,
		marginHorizontal: 30,
	}
})

export default Btn;