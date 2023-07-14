import './Table.css'
import React, {useState, useEffect, useCallback, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import SearchIcon from '@mui/icons-material/Search';

const Table = ({data, columnNames}) => {
	const gridRef = useRef();
	const [rowData, setRowData] = useState();
	const [columns, setColumns] = useState([]);

	const defaultColDef = {
		sortable: true
	};

	const onFilterTextBoxChanged = useCallback(() => {
		gridRef.current.api.setQuickFilter(
			document.getElementById('filter-text-box').value
		);
	}, []);

	// Example load data from server
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(result => result.json())
			.then(rowData => {
				setColumns(Object.keys(rowData[0]))
				setRowData(rowData)
			})
	}, []);

	return (
		<div>
				<div className="example-wrapper">
					<div className="example-header">
						<div className={'filter-text-container mb-2'}>
							<div className="input-group flex-nowrap">
								<span className="input-group-text" id="addon-wrapping"><SearchIcon/></span>
								<input type="text" className="form-control" placeholder="Username" aria-label="Username" id="filter-text-box" onInput={onFilterTextBoxChanged}
								       aria-describedby="addon-wrapping"/>
							</div>
						</div>

						<div className="ag-theme-alpine" style={{width: "100%", height: 600}}>
							<AgGridReact
								ref={gridRef}
								rowData={rowData}
								columnDefs={columns.map(col => {
									return {field: col, headerName: "Ranidu"}
								})}
								defaultColDef={defaultColDef}
								pagination={true}
							/>
						</div>
					</div>
				</div>
		</div>
	);
}

export default Table;