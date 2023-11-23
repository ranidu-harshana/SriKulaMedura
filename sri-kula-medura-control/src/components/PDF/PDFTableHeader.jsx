import {StyleSheet, Text, View} from "@react-pdf/renderer";

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomColor: '#bff0fd',
		backgroundColor: '#bff0fd',
		borderBottomWidth: 1,
		alignItems: 'center',
		height: 24,
		textAlign: 'center',
		fontStyle: 'bold',
		flexGrow: 1,
	},
	description: {
		width: '60%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
	},
	qty: {
		width: '10%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
	},
	rate: {
		width: '15%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
	},
	amount: {
		width: '15%'
	},
});

const PDFTableHeader = () => (
	<View style={styles.container}>
		<Text style={styles.description}>Name</Text>
		<Text style={styles.qty}>Date</Text>
		<Text style={styles.rate}>Branch</Text>
		<Text style={styles.amount}>Amount</Text>
	</View>
);

export default PDFTableHeader