import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import axios from 'axios';

export default function Show() {
    const [rows, setRows] = useState([]);
    
    useEffect(() => {
		axios.get('http://localhost:3000/companies')
        .then(({data}) => {
            setRows(data);
            // console.log(data)
		})
        .catch((err) => {
            console.log(err);
        });
    },[]);

    const rowsToRender = [];

    rows.map((row, index) => {
        rowsToRender.push(
            <View style={styles.row} key={index}>
                <Text style={styles.text}>{row.cin}</Text>
                <Text style={styles.text}>{row.company}</Text>
            </View>
        )
    });

	return (
		<View style={styles.container}>

            <TouchableOpacity style={styles.addCompanyBtn}>
                <Text>Add Company +</Text>
            </TouchableOpacity>

            <View style={styles.table}>
                {
                    rowsToRender
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
    addCompanyBtn:{
        
    },  
    table: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    },
    text: {
        padding: 20,
        fontSize: 20,
    }
});
