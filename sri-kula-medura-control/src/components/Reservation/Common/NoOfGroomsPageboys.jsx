import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";

const NoOfGroomsPageboys = (props) => {
	const [noOfBestmen, setNoOfBestmen] = useState('')
	const [noOfPageBoys, setNoOfPageBoys] = useState('')

	return (
		<>
			<div className="col-12 col-md-4">
				<div className="row mb-3">
					<div>
						<FormControl sx={{ width: "100%" }} size="small">
							<InputLabel id="demo-select-small-label">No of Bestmen</InputLabel>
							<Select
								labelId="demo-select-small-label"
								id="demo-select-small"
								label="No of Bestmen"
								value={noOfBestmen}
								onChange={(e)=>setNoOfBestmen(e.target.value)}
							>
								<MenuItem value={1} key={1}>1</MenuItem>)
								<MenuItem value={2} key={2}>2</MenuItem>)
								<MenuItem value={3} key={3}>3</MenuItem>)
								<MenuItem value={4} key={4}>4</MenuItem>)
								<MenuItem value={5} key={5}>5</MenuItem>)
								<MenuItem value={6} key={6}>6</MenuItem>)
							</Select>
						</FormControl>
					</div>
				</div>
			</div>
			<div className="col-12 col-md-4">
				<div className="row mb-3">
					<div>
						<FormControl sx={{ width: "100%" }} size="small">
							<InputLabel id="demo-select-small-label">No of Pageboys</InputLabel>
							<Select
								labelId="demo-select-small-label"
								id="demo-select-small"
								label="No of Pageboys"
								value={noOfPageBoys}
								onChange={(e)=>setNoOfPageBoys(e.target.value)}
							>
								<MenuItem value={1} key={1}>1</MenuItem>)
								<MenuItem value={2} key={2}>2</MenuItem>)
								<MenuItem value={3} key={3}>3</MenuItem>)
								<MenuItem value={4} key={4}>4</MenuItem>)
								<MenuItem value={5} key={5}>5</MenuItem>)
								<MenuItem value={6} key={6}>6</MenuItem>)
							</Select>
						</FormControl>
					</div>
				</div>
			</div>
			<div className="col-12 col-md-4 mb-3 mb-md-0">
				<button className={'btn btn-success'}>Submit</button>
			</div>
		</>
	);
}

export default NoOfGroomsPageboys;