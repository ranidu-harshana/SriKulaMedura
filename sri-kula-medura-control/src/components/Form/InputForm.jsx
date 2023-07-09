import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";

const InputForm = () => {
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const categories = ["science", "sports", "business", "politics", "entertainment", "technology", "world", "all"];
	return (<>
			<Paper elevation={3} sx={{}}>

				<Typography variant="h6" gutterBottom sx={{}}>
					Input Form
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={2}>
						<InputLabel
							sx={{
								display: "flex", justifyContent: "center", fontWeight: 700
							}}
						>
							Title
						</InputLabel>
					</Grid>
					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="title"
							name="title"
							label="Title"
							fullWidth
							size="small"
							autoComplete="off"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<InputLabel
							sx={{
								display: "flex", justifyContent: "center", fontWeight: 700
							}}
						>
							Content
						</InputLabel>
					</Grid>
					<Grid item xs={12} sm={10}>
						<TextField
							id="outlined-multiline-static"
							label="Content"
							multiline
							fullWidth
							rows={4}
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<InputLabel
							sx={{
								display: "flex", justifyContent: "center", fontWeight: 700
							}}
						>
							URL
						</InputLabel>
					</Grid>
					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="url"
							name="url"
							label="URL"
							fullWidth
							size="small"
							autoComplete="off"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<InputLabel
							sx={{
								display: "flex", justifyContent: "center", fontWeight: 700
							}}
						>
							Category
						</InputLabel>
					</Grid>
					<Grid item xs={12} sm={4}>
						<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
							>
								{categories.map((item) => (<MenuItem value={item}>{item}</MenuItem>))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={2}>
						<InputLabel
							sx={{
								display: "flex", justifyContent: "center", fontWeight: 700
							}}
						>
							Author
						</InputLabel>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							required
							id="author"
							name="author"
							label="Author"
							fullWidth
							size="small"
							autoComplete="off"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<InputLabel
							sx={{
								display: "flex", justifyContent: "center", fontWeight: 700
							}}
						>
							Img Upload
						</InputLabel>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Button>
							<UploadFileIcon/>
						</Button>
					</Grid>
					<Grid item xs={12} sm={6}/>
					<Grid item xs={12} sm={5}/>
					<Grid item xs={12} sm={4}>
						<Button variant="contained" sx={{color: "#ff781f"}}>
							Save
						</Button>
					</Grid>
					<Grid item xs={12} sm={5}/>
				</Grid>

			</Paper>
		</>);
}

export default InputForm;