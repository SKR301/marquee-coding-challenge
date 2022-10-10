import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './pages/search';
import Show from './pages/show';

export default function App() {
	return (
		<View style={styles.container}>
			<Search />
			{/* <Show /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
