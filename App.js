import { StyleSheet, View } from 'react-native';
import Search from './pages/search';
import Show from './pages/show';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<View style={styles.container}>
			<BrowserRouter>
				<Routes>
					<Route path='/search' element={<Search />} />
					<Route path='/show' element={<Show />} />
				</Routes>
			</BrowserRouter>
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
