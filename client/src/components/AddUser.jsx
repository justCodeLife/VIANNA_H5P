import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar} from '@material-ui/core';
import {useEffect, useState} from "react";
import api from "../service";
import {useDispatch, useSelector} from "react-redux";

export default function AddUser() {
    const [snackbar, setSnackbar] = useState({open: false, message: ''});
    const user = useSelector(state => state.toEditUser)
    const showAddUserModal = useSelector(state => state.showAddUserModal)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClose = () => {
        dispatch({type: 'SHOW_ADD_USER_MODAL', payload: false})
        dispatch({type: 'SET_TO_EDIT_USER', payload: null})
    };

    const submit = () => {
        if (user) {
            api().put('/users', {
                id: user.id,
                name, username, password
            }).then(res => {
                if (res.data.error)
                    setSnackbar({message: res.data.error, open: true})
                setName('')
                setUsername('')
                setPassword('')
                handleClose()
                if (res.data.success)
                    dispatch({type: 'SET_HAS_TO_FETCH_USERS', payload: true})
            }).catch(err => {
                console.log(err)
                setSnackbar({message: 'عملیات با خطا مواجه شد', open: true})
            })
        } else {
            api().post('/users', {
                name, username, password
            }).then(res => {
                if (res.data.error)
                    setSnackbar({message: res.data.error, open: true})
                setName('')
                setUsername('')
                setPassword('')
                handleClose()
                if (res.data.success)
                    dispatch({type: 'SET_HAS_TO_FETCH_USERS', payload: true})
            }).catch(err => {
                console.log(err)
                setSnackbar({message: 'عملیات با خطا مواجه شد', open: true})
            })
        }
    }

    useEffect(() => {
        if (user) {
            setUsername(user.username)
            setName(user.name)
        }
    }, [user])

    return (
        <div>
            <Dialog open={showAddUserModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={"xs"}>
                <DialogTitle id="form-dialog-title">{user ? 'ویرایش کاربر' : 'افزودن کاربر'}</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="normal" label="نام و نام خانوادگی" type="text" fullWidth value={name}
                               inputProps={{maxLength: 30}} required={true} onChange={e => setName(e.target.value)}/>
                    <TextField margin="normal" label="نام کاربری" type="text" fullWidth inputProps={{maxLength: 30}}
                               value={username}
                               required={true} onChange={e => setUsername(e.target.value)}/>
                    <TextField margin="normal" label="رمز عبور" type="password" fullWidth inputProps={{maxLength: 30}}
                               required={true} onChange={e => setPassword(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        لغو
                    </Button>
                    <Button onClick={submit} color="primary">
                        تایید
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={snackbar.open}
                      autoHideDuration={2000} onClose={() => setSnackbar({...snackbar, open: false})}
                      message={snackbar.message}/>
        </div>
    );
}