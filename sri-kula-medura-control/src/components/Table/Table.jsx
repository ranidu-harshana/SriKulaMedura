import './Table.css'
import React, {useCallback, useRef} from 'react';
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import SearchIcon from '@mui/icons-material/Search';

const Table = ({payload, columns}) => {
	const windowHeight = window.innerHeight - 300
	const gridRef = useRef();

	const defaultColDef = {
		sortable: true
	};

	const onFilterTextBoxChanged = useCallback(() => {
		gridRef.current.api.setQuickFilter(
			document.getElementById('filter-text-box').value
		);
	}, []);

	return (
		<div>
				<div className="example-wrapper">
					<div className="example-header">
						<div className={'filter-text-container mb-2'}>
							<div className="input-group flex-nowrap">
								<span className="input-group-text" id="addon-wrapping"><SearchIcon/></span>
								<input type="text" className="form-control" placeholder="Search" aria-label="Search" id="filter-text-box" onInput={onFilterTextBoxChanged}
								       aria-describedby="addon-wrapping"/>
							</div>
						</div>

						<div className="ag-theme-alpine" style={{width: "100%", height: `${windowHeight}px`}}>
							<AgGridReact
								ref={gridRef}
								rowData={payload}
								columnDefs={columns}
								defaultColDef={defaultColDef}
								pagination={true}
								paginationAutoPageSize={true}
							/>
						</div>
					</div>
				</div>
		</div>
	);
}

export default Table;