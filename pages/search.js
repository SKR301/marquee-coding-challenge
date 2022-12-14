import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Search() {

	const [companies, setCompanies] = useState([]);
	const [index, setIndex] = useState(-1);
	const [cin, setCin] = useState('');
	const [company, setCompany] = useState('');
	const [inputData, setInputData] = useState('');
	const navigate = useNavigate();

	const inputChangeHandeler = (val) => {
		axios.post('https://www.zaubacorp.com/custom-search', {search: val, filter: "company"},{
			"body": "search=s&filter=company",
			"method": "POST",
		}).then(({data}) => {
			data = data.split(' </div>')
			let companyDataList = [];
			data.map((line, index) => {
				try{
					companyDataList.push({cin: line.split('>')[0].split('/')[2].split('"')[0], name: line.split('>')[1]});
				} catch {

				}
			});
			setCompanies(companyDataList);
			setInputData(val);
		});
	}

	const onDataPressHandler = (index) => {
		setInputData(companies[index].name);
		setCin(companies[index].cin);
		setCompany(companies[index].name);
		setCompanies([]);
	}

	const onSearchPressHandler = () => {
		console.log(cin, company);
		axios.post('http://localhost:3000/companies', {cin: cin, company: company},{
			"method": "POST",
		})
		.then(({data}) => {
			console.log(data);
			navigate('/show');
		})
	}

	useEffect(()=>{
		
	},[company, inputData, cin, companies]);

	const companiesToRender = [];
	companies.map((element, index) => {
		companiesToRender.push(
			<TouchableOpacity style={styles.company} key={index} onPress={()=>onDataPressHandler(index)}>
				<Text style={styles.companyText}>{element.name}</Text>
			</TouchableOpacity>
		)
	});

	return (
		<View style={styles.container}>

			<View style={styles.searchContainer}>
				<TextInput style={styles.inputFormData} value={inputData} placeholder={'Enter search query...'} onChange={() => inputChangeHandeler(event.text)}>
				</TextInput>
				<TouchableOpacity style={styles.searchBtn} onPress={onSearchPressHandler}>
					<Text style={styles.searchBtnText}>Search</Text>
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
		width: 1000,
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		padding: 15,
		fontSize: 20,
		borderBottomWidth: 5,
		borderRightWidth: 5,
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderColor: '#098',
	},
	searchBtn: {
		backgroundColor: '#098',
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		padding: 15,
		fontSize: 12,
	},
	searchBtnText: {
		color: '#fff',
		fontSize: 20,
	},	
	company:{
		width: 750,
		fontSize: 20,
		padding: 10,
		borderWidth: 2,
		borderColor: '#aaa'
	},
	companyText: {
		fontSize: 20,
	}
});
