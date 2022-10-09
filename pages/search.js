import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';

export default function Search() {
	return (
		<View style={styles.container}>
			<TextInput style={styles.inputFormData} placeholder={'Enter search query...'}>
			</TextInput>
			<TouchableOpacity style={styles.searchBtn}><Text>Search</Text></TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputFormData: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		padding: 15,
		fontSize: 12,
		borderBottomWidth: 5,
		borderRightWidth: 5,
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderColor: '#aaa',
	},
	searchBtn: {
		backgroundColor: '#aaa',
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		padding: 15,
		fontSize: 12,
	}
});
