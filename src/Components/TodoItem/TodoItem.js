import React from 'react';
import { Text, View, SectionList, SafeAreaView, StyleSheet } from 'react-native';
import styles from './style'

const TodoItem = ({ title }) => (
	<View style={styles.item}>
		<Text>{title}</Text>
	</View>
);

export default TodoItem;