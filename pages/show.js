import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Show() {
    const [data, setData] = useState({});
    
    useEffect(() => {
        // getCompanies();
    },[]);

	return (
		<View style={styles.container}>

            <TouchableOpacity style={styles.addCompanyBtn}>
                <Text>Add Company +</Text>
            </TouchableOpacity>

            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.text}>CIN1</Text>
                    <Text style={styles.text}>Company1</Text>
                </View>
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
