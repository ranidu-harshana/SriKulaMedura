import PageTopic from "../../components/PageTopic/PageTopic";
import Table from "../../components/Table/Table";
import {useEffect, useRef} from "react";
import {getAllBranches, storeBranch} from "../../repository/branchRepository";
import {useDispatch, useSelector} from "react-redux";
import {addBranches, saveBranch, selectAllBranch} from "../../store/slices/branchSlice";
import {useTranslation} from "react-i18next";

const Branch = () => {
	const {t} = useTranslation()
	const branches = useSelector(selectAllBranch)
	const dispatcher = useDispatch()

	const branchNameRef = useRef('')
	const branchPrefRef = useRef('')

	const columns = [{field: 'id', headerName: "Id", maxWidth: 300}, {
		field: 'name',
		headerName: "Branch Name"
	}, {field: 'prefix', headerName: "Prefix"}, {field: 'created_at', headerName: "Created At"},
		// { field: 'id', headerName: "Actions", cellRenderer: BranchActionBtns },
	]

	useEffect(() => {
		if (branches.length < 1) {
			getAllBranches()
				.then((response) => {
					dispatcher(addBranches(response.data))
				})
				.catch(error => {
					console.log("ERROR: " + error)
				})
		}
	}, [branches, dispatcher])

	return (<>
			<PageTopic topic={t('branch')}
			           breadcrumbs={[{title: t("home"), link: "/", active: false}, {title: t("branch"), active: true}]}/>

			<div>
				<input ref={branchNameRef} type="text" placeholder={'Branch Name'} className={'form-control-sm mb-2'}/><br/>
				<input ref={branchPrefRef} type="text" placeholder={'Prefix'} className={'form-control-sm mb-2'}/><br/>
				<button onClick={() => {
					storeBranch(branchNameRef.current.value, branchPrefRef.current.value)
						.then(response => {
							dispatcher(saveBranch({...response.data}))
						})
						.catch(error => {
							console.log("ERROR: "+error);
						})
				}} className={'btn btn-sm btn-success mb-2'}>Save
				</button>
			</div>

			<Table columns={columns} payload={branches}/>
		</>);
}

export default Branch;

// const BranchActionBtns = () => {
// 	return (<div>BranchActionBtns</div>);
// }