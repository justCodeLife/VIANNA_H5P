import {Button, Dialog, DialogActions, DialogTitle} from '@material-ui/core';
import {useSelector, useDispatch} from "react-redux";

export default function DeleteConfirmModal() {
    const dispatch = useDispatch()
    const showDeleteConfirmModal = useSelector(state => state.showDeleteConfirmModal)
    const toDeleteRecord = useSelector(state => state.toDeleteRecord)
    const handleClose = () => {
        dispatch({type: 'SHOW_DELETE_CONFIRM_MODAL', payload: false})
        dispatch({type: 'DELETE_RECORD', payload: null})
    };
    return (
        <div>
            <Dialog open={showDeleteConfirmModal} onClose={handleClose} aria-labelledby="alert-dialog-title"
                    maxWidth={'xs'}>
                <DialogTitle id="alert-dialog-title">آیا از حذف این مورد اطمینان دارید؟</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        خیر
                    </Button>
                    <Button onClick={() => {
                        dispatch({type: 'DELETE_RECORD', payload: {...toDeleteRecord, confirm: true}})
                    }} color="primary">
                        بله
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}