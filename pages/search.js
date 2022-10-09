import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Search() {

	const [companies, setCompanies] = useState([]);
	// const [selectedCompany, setSelectedCompany] = useState('');
	const [inputData, setInputData] = useState('');

	const inputChangeHandeler = (val) => {
		axios.post('https://www.zaubacorp.com/custom-search', {search: val, filter: "company"},{
				"body": "search=s&filter=company",
				"method": "POST",
			}).then(({data}) => {
				data = data.split(' </div>')
				let company = []
				data.map((line, index) => {
					company.push(line.split('>')[1])
				});
				setCompanies(company);
				setInputData(val);
			});
	}

	const onDataPressHandler = (company) => {
		setInputData(company);
		setCompanies([]);
	}

	const onSearchPressHandler = () => {
		
	}

	useEffect(()=>{
		
	},[companies, inputData]);

	const companiesToRender = [];
	companies.map((element, index) => {
		companiesToRender.push(
			<TouchableOpacity style={styles.company} key={index} onPress={()=>onDataPressHandler(event.explicitOriginalTarget.innerHTML)}>
				<Text>{element}</Text>
			</TouchableOpacity>
		)
	});

	return (
		<View style={styles.container}>

			<View style={styles.searchContainer}>
				<TextInput style={styles.inputFormData} value={inputData} placeholder={'Enter search query...'} onChange={() => inputChangeHandeler(event.text)}>
				</TextInput>
				<TouchableOpacity style={styles.searchBtn} onPress={onSearchPressHandler}>
					<Text>Search</Text>
				</TouchableOpacity>
 			</View>

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
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchContainer: {
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
	},
	company:{
		fontSize: 20,
		padding: 10,
	}
});
