import {toast} from "react-toastify";

const options = {
	position: "bottom-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
}
const notify = (type, message) => {
	switch (type) {
		case 0:toast.error(message, options); break;
		case 1:toast.success(message, options); break;
		case 3:toast.info(message, options); break;
		case 4:toast.warn(message, options); break;
		default: toast(message, options);
	}
}

export default notify