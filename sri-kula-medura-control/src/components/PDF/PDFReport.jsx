import {Document, Font, Page, PDFViewer, StyleSheet, Text, View} from "@react-pdf/renderer";
import PDFTableHeader from "./PDFTableHeader";
import PDFTableRow from "./PDFTableRow";

const PdfReport = ({items}) => {
	return (
		<>
			<PDFViewer style={styles.viewer}>
				<Document>
					<Page style={styles.body}>
						<Text style={styles.title}>Wedding Reservation Report</Text>
						<View><PDFTableHeader/></View>

						<PDFTableRow/>
						<PDFTableRow/>

						<Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
							`${pageNumber} / ${totalPages}`
						)} fixed />
					</Page>
				</Document>
			</PDFViewer>
		</>
	);
}

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

export default PdfReport;