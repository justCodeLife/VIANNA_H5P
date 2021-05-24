import Cookies from 'js-cookie';
import {createStore} from 'redux'

const store = {
    token: Cookies.get('token'),
    user: null,
    showAddUserModal: false,
    showDeleteConfirmModal: false,
    toEditUser: null,
    toEditContent: null,
    hasToFetchUsers: false,
    toDeleteRecord: null
}
export default createStore((state = {}, action) => {
    switch (action.type) {
        case 'DELETE_RECORD':
            return state = {...state, toDeleteRecord: action.payload}
        case 'SET_TOKEN':
            return state = {...state, token: action.payload}
        case 'SET_USER':
            return state = {...state, user: action.payload}
        case 'SET_HAS_TO_FETCH_USERS':
            return state = {...state, hasToFetchUsers: action.payload}
        case 'SET_TO_EDIT_USER':
            return state = {...state, toEditUser: action.payload}
        case 'SET_TO_EDIT_CONTENT':
            return state = {...state, toEditContent: action.payload}
        case 'SHOW_ADD_USER_MODAL':
            return state = {...state, showAddUserModal: action.payload}
        case 'SHOW_DELETE_CONFIRM_MODAL':
            return state = {...state, showDeleteConfirmModal: action.payload}
        default:
            return state
    }
}, store)
