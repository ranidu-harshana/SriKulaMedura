import {StyleSheet, Text, View} from "@react-pdf/renderer";

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		borderBottomColor: '#bff0fd',
		borderBottomWidth: 1,
		alignItems: 'center',
		height: 24,
		fontStyle: 'bold',
	},
	description: {
		width: '50%',
		textAlign: 'left',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		paddingLeft: 8,
	},
	qty: {
		width: '20%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		textAlign: 'right',
		paddingRight: 8,
	},
	rate: {
		width: '15%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		textAlign: 'right',
		paddingRight: 8,
	},
	amount: {
		width: '15%',
		textAlign: 'right',
		paddingRight: 8,
	},
});
const PDFTableRow = ({item}) => (<>
	<View style={styles.row} >
		<Text style={styles.description}>{item.customer.name}</Text>
		<Text style={styles.qty}>{item.created_at}</Text>
		<Text style={styles.rate}>{item.branch_name}</Text>
		<Text style={styles.amount}>{item.amount_payable}</Text>
	</View>

</>
);

export default PDFTableRow;