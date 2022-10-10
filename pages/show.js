import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Show() {
    const [rows, setRows] = useState([]);
	const navigate = useNavigate();
    
    useEffect(() => {
		axios.get('http://localhost:3000/companies')
        .then(({data}) => {
            setRows(data);
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

            <View style={styles.table}>
            {
                rowsToRender
            }
            </View>

            <TouchableOpacity style={styles.addCompanyBtn} onPress={() => navigate('/')}>
                <Text style={styles.addCompanyBtnText}>Add Company +</Text>
            </TouchableOpacity>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
    addCompanyBtn:{
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: '#098'
    },  
    addCompanyBtnText: {
        fontSize: 20,
        color: '#fff'
    },
    table: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#aaa',
        margin: 5,
        paddingHorizontal: 100,
    },
    text: {
        padding: 20,
        fontSize: 20,
    }
});
