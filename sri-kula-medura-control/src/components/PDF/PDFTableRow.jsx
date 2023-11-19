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
const PDFTableRow = ({items}) => (<>
	<View style={styles.row} >
		<Text style={styles.description}>Ranidu Harshana</Text>
		<Text style={styles.qty}>2023/10/02</Text>
		<Text style={styles.rate}>SKM</Text>
		<Text style={styles.amount}>20000</Text>
	</View>

<View style={styles.row} >
	<Text style={styles.description}>Sachinfu</Text>
	<Text style={styles.qty}>2023/10/02</Text>
	<Text style={styles.rate}>SKM</Text>
	<Text style={styles.amount}>25000</Text>
</View>

<View style={styles.row} >
	<Text style={styles.description}>Ranidu Harshana</Text>
	<Text style={styles.qty}>2023/09/02</Text>
	<Text style={styles.rate}>SKM</Text>
	<Text style={styles.amount}>30000</Text>
</View>

<View style={styles.row} >
	<Text style={styles.description}>Danilka Shalinda</Text>
	<Text style={styles.qty}>2023/09/02</Text>
	<Text style={styles.rate}>SKM</Text>
	<Text style={styles.amount}>20500</Text>
</View></>
);

export default PDFTableRow;