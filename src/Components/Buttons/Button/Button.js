import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from '../style';

const Btn = ({ btnTitle, nav, navTo }) => {
	// console.log(nav)
	return (
		// <Button title={btnTitle} style={styles.btn}/>
		<TouchableHighlight underlayColor='#aaa' onPress={() => nav.navigate(navTo)} style={styles.btn}>
			<Text style={styles.text}>{btnTitle}</Text>
		</TouchableHighlight>
	)
}

export default Btn;