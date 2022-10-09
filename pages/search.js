import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Search() {

	const [companies, setCompanies] = useState([]);

	// const parseHTMLResp = (input) = {

	// }

	const inputChangeHandeler = () => {
		axios.post('https://www.zaubacorp.com/custom-search', {search: "s", filter: "company"},{
				"body": "search=s&filter=company",
				"method": "POST",
			}).then(({data}) => {
				data = data.split(' </div>')
				let company = []
				data.map((line, index) => {
					company.push(line.split('>')[1])
				});
				setCompanies(company);
			});
	}

	const onSearchPressHandler = () => {

	}

	useEffect(()=>{
		
	},[companies]);

	const companiesToRender = [];
	companies.map((element, index) => {
		companiesToRender.push(
			<Text>{element}</Text>
		)
	});


	return (
		<View style={styles.container}>
			<TextInput style={styles.inputFormData} placeholder={'Enter search query...'} onChange={inputChangeHandeler}>
			</TextInput>
			<TouchableOpacity style={styles.searchBtn} onPress={onSearchPressHandler}>
				<Text>Search</Text>
			</TouchableOpacity>
			<View>
			{
				companiesToRender
			}
			</View>
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
