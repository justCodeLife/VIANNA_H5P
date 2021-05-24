import MUIDataTable from "mui-datatables";
import Layout from "./shared/Layout";
import {Backdrop, CircularProgress, IconButton, Snackbar, Tooltip} from "@material-ui/core";
import {Edit as EditIcon, Delete as DeleteIcon, FileCopy as FileCopyIcon} from '@material-ui/icons';
import {useEffect, useState} from "react";
import {copyToClipboard} from '../helpers/utils'
import {useDispatch, useSelector} from "react-redux";
import api from "../service";
import {useHistory} from "react-router-dom";
import DeleteConfirmModal from "./shared/DeleteConfirmModal";

function Contents() {
    const history = useHistory()
    const user = useSelector(state => state.user)
    const toDeleteRecord = useSelector(state => state.toDeleteRecord)
    const dispatch = useDispatch()
    const [snackbar, setSnackbar] = useState({open: false, message: ''});
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)
    const columns = [{name: 'title', label: "عنوان"}, {name: 'library_name', label: "نوع"}, {
        name: 'created_at',
        label: "تاریخ ایجاد",
        options: {
            customBodyRenderLite: (dataIndex) => {
                return (<div dir={'ltr'}>{rows[dataIndex].created_at}</div>)
            }
        }
    }, {
        name: 'عملیات',
        options: {
            customBodyRenderLite: (dataIndex) => {
                return (
                    <div>
                        <Tooltip title={"کپی Iframe"}>
                            <IconButton color="primary" onClick={() => getIframe(dataIndex)}>
                                <FileCopyIcon style={{color: 'dodgerblue'}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"ویرایش"}>
                            <IconButton style={{color: 'orange'}} onClick={() => editContent(dataIndex)}>
                                <EditIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"حذف"}>
                            <IconButton style={{color: 'red'}} onClick={() => deleteContent(dataIndex)}>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                )
            }
        }
    }];

    useEffect(() => {
        fetchRows()
    }, [])

    function fetchRows() {
        setLoading(true)
        api().get('/contents').then(res => {
            setLoading(false)
            if (!res.data.error) {
                setRows(res.data)
            } else
                setSnackbar({message: res.data.error, open: true})
        }).catch(err => {
            setLoading(false)
            console.log(err)
            setSnackbar({message: 'دریافت اطلاعات با خطا مواجه شد', open: true});
        })
    }

    function getIframe(index) {
        api().get(`/get_iframe/${rows[index].id}`).then(res => {
            if (!res.data.error) {
                copyToClipboard(res.data.iframe)
                setSnackbar({message: 'کد iframe کپی شد', open: true})
            } else
                setSnackbar({message: res.data.error, open: true})
        }).catch(err => {
            setLoading(false)
            console.log(err)
            setSnackbar({message: 'دریافت اطلاعات با خطا مواجه شد', open: true});
        })
    }

    function deleteContent(index) {
        dispatch({type: 'DELETE_RECORD', payload: {row_index: index, confirm: false}})
        dispatch({type: 'SHOW_DELETE_CONFIRM_MODAL', payload: true})
    }

    useEffect(() => {
        if (toDeleteRecord) {
            if (toDeleteRecord.confirm === true) {
                setLoading(true)
                api().delete(`/contents`, {
                    data: {
                        id: rows[toDeleteRecord.row_index].id,
                        username: user.username
                    }
                }).then(res => {
                    if (!res.data.error) {
                        dispatch({type: 'SHOW_DELETE_CONFIRM_MODAL', payload: false})
                        dispatch({type: 'DELETE_RECORD', payload: null})
                        fetchRows()
                    } else
                        setSnackbar({message: res.data.error, open: true});
                }).catch(err => {
                    setLoading(false)
                    console.log(err)
                    setSnackbar({message: 'حذف محتوا با خطا مواجه شد', open: true})
                })
            }
        }
    }, [toDeleteRecord])

    function editContent(index) {
        dispatch({type: 'SET_TO_EDIT_CONTENT', payload: rows[index]})
        history.push('/edit_content')
    }

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
                noMatch: "هیچ محتوایی یافت نشد",
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
        <Layout Component={Contents} title={'لیست محتوا'}/>
    )
}