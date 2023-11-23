import {  Page, Text, View, Document, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const stylesss = StyleSheet.create({
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
	<View style={stylesss.container}>
		<Text style={stylesss.description}>Item Description</Text>
		<Text style={stylesss.qty}>Qty</Text>
		<Text style={stylesss.rate}>@</Text>
		<Text style={stylesss.amount}>Amount</Text>
	</View>
);

const borderColor2 = '#90e5fc'
const styles2 = StyleSheet.create({
	row: {
		flexDirection: 'row',
		borderBottomColor: '#bff0fd',
		borderBottomWidth: 1,
		alignItems: 'center',
		height: 24,
		fontStyle: 'bold',
	},
	description: {
		width: '60%',
		textAlign: 'left',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		paddingLeft: 8,
	},
	qty: {
		width: '10%',
		borderRightColor: borderColor,
		borderRightWidth: 1,
		textAlign: 'right',
		paddingRight: 8,
	},
	rate: {
		width: '15%',
		borderRightColor: borderColor2,
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
const PDFTablRow = ({items}) => (
		<View style={styles2.row} >
			<Text style={styles2.description}>wdawd</Text>
			<Text style={styles2.qty}>wadwdawd</Text>
			<Text style={styles2.rate}>213123</Text>
			<Text style={styles2.amount}>wa24</Text>
		</View>
);

const Test = () => (
	<PDFViewer style={styles.viewer}>
	<Document>
		<Page style={styles.body}>
			<Text style={styles.title}>Don Quijote de la Mancha</Text>
<View><PDFTableHeader/></View>

				<PDFTablRow/>
				<PDFTablRow/>

			<Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
				`${pageNumber} / ${totalPages}`
			)} fixed />
		</Page>
	</Document>
	</PDFViewer>
);

Font.register({
	family: 'Oswald',
	src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const windowHeight = window.innerHeight - 140
const styles = StyleSheet.create({
	viewer: {
		width: '100%', //the pdf viewer will take up all of the width and height
		minHeight: `${windowHeight}px`,
	},

	title: {
		fontSize: 24,
		textAlign: 'center',
		fontFamily: 'Oswald'
	},
	author: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		fontFamily: 'Oswald'
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: 'justify',
		fontFamily: 'Times-Roman'
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: 'center',
		color: 'grey',
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
});

export default Test;