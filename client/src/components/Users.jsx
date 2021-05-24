import MUIDataTable from "mui-datatables";
import Layout from "./shared/Layout";
import {Backdrop, CircularProgress, IconButton, Snackbar, Tooltip} from "@material-ui/core";
import {Edit as EditIcon, Delete as DeleteIcon} from '@material-ui/icons';
import {useEffect, useState} from "react";
import AddUser from "./AddUser";
import {useDispatch, useSelector} from "react-redux";
import api from "../service";
import DeleteConfirmModal from "./shared/DeleteConfirmModal";

function Users() {
    const dispatch = useDispatch()
    const toDeleteRecord = useSelector(state => state.toDeleteRecord)
    const [snackbar, setSnackbar] = useState({open: false, message: ''});
    const showAddUserModal = useSelector(state => state.showAddUserModal)
    const hasToFetchUsers = useSelector(state => state.hasToFetchUsers)
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)
    const columns = [{name: 'name', label: "نام و نام خانوادگی"}, {name: 'username', label: "نام کاربری"}, {
        name: 'عملیات',
        options: {
            customBodyRenderLite: (dataIndex) => {
                return (
                    <div>
                        <Tooltip title={"ویرایش"}>
                            <IconButton style={{color: 'orange'}}
                                        onClick={() => editUser(dataIndex)}>
                                <EditIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"حذف"}>
                            <IconButton style={{color: 'red'}}
                                        onClick={() => deleteUser(dataIndex)}>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                )
            }
        }
    }];

    function editUser(index) {
        dispatch({type: 'SET_TO_EDIT_USER', payload: rows[index]})
        dispatch({type: 'SHOW_ADD_USER_MODAL', payload: true})
    }

    function deleteUser(index) {
        dispatch({type: 'DELETE_RECORD', payload: {row_index: index, confirm: false}})
        dispatch({type: 'SHOW_DELETE_CONFIRM_MODAL', payload: true})
    }

    function fetchRows() {
        setLoading(true)
        api().get('/users').then(res => {
            setLoading(false)
            if (!res.data.error) {
                setRows(res.data)
                dispatch({type: 'SET_HAS_TO_FETCH_USERS', payload: false})
            } else
                setSnackbar({message: res.data.error, open: true});
        }).catch(err => {
            setLoading(false)
            console.log(err)
            setSnackbar({message: 'دریافت اطلاعات با خطا مواجه شد', open: true});
        })
    }

    useEffect(() => {
        fetchRows()
    }, [])

    useEffect(() => {
        if (hasToFetchUsers === true)
            fetchRows()
    }, [hasToFetchUsers])

    useEffect(() => {
        if (toDeleteRecord) {
            if (toDeleteRecord.confirm === true) {
                setLoading(true)
                api().delete(`/users/${rows[toDeleteRecord.row_index].id}`).then(res => {
                    if (!res.data.error) {
                        dispatch({type: 'SHOW_DELETE_CONFIRM_MODAL', payload: false})
                        dispatch({type: 'DELETE_RECORD', payload: null})
                        fetchRows()
                    } else
                        setSnackbar({message: res.data.error, open: true});
                }).catch(err => {
                    setLoading(false)
                    console.log(err)
                    setSnackbar({message: 'حذف کاربر با خطا مواجه شد', open: true})
                })
            }
        }
    }, [toDeleteRecord])

    const options = {
        sort: false,
        filterType: 'checkbox',
        search: false,
        print: false,
        viewColumns: false,
        download: false,
        filter: false,
        selectToolbarPlacement: 'none',
        selectableRowsHideCheckboxes: true,
        textLabels: {
            body: {
                noMatch: "هیچ کاربری یافت نشد",
            },
            pagination: {
                next: "صفحه بعدی",
                previous: "صفحه قبلی",
                rowsPerPage: "تعداد در صفحه :",
                displayRows: "از",
            },
            toolbar: {
                search: "جستجو",
                viewColumns: "نمایش ستون ها",
            },
            filter: {
                all: "همه",
                title: "فیلتر ها",
                reset: "ریست",
            },
            viewColumns: {
                title: "نمایش ستون ها",
                titleAria: "نمایش/مخفی کردن ستون های جدول",
            },
            selectedRows: {
                text: "سطر انتخاب شده",
                delete: "حذف",
                deleteAria: "حذف موارد انتخاب شده",
            },
        }
    };

    return (
        <div style={{height: '100%', width: '100%', marginTop: '4rem'}}>
            <MUIDataTable
                data={rows}
                columns={columns}
                options={options}
            />
            {showAddUserModal ? <AddUser/> : ''}
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={snackbar.open}
                      autoHideDuration={2000} onClose={() => setSnackbar({...snackbar, open: false})}
                      message={snackbar.message}/>
            <DeleteConfirmModal/>
            <Backdrop open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    )
}

export default function Main() {
    return (
        <Layout Component={Users} title={'لیست کاربران'}/>
    )
}