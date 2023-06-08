import {createContext, useState} from "react";
import {useMediaQuery} from "@mui/material";

export const controlActivity = createContext({})
const ControlActivity = ({children}) => {
	const [sideNavVisibility, setSideNavVisibility] = useState(false);
	const matchesMedia768 = useMediaQuery("(max-width:768px)");

	return (
		<controlActivity.Provider
			value={{sideNavVisibility, setSideNavVisibility, matchesMedia768}}>
			{children}
		</controlActivity.Provider>
	);
}

export default ControlActivity;