import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {Backdrop, CircularProgress} from "@material-ui/core";
import {useState} from "react";
import Contents from "./components/Contents";
import Login from './components/shared/Login';
import AddContent from "./components/AddContent";
import EditContent from "./components/EditContent";
import Users from "./components/Users";
import api from "./service";
import {useDispatch, useSelector} from "react-redux";

function ProvideAuth({children}) {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.user)
    const [redirectToLogin, setRedirectToLogin] = useState(null)
    if (loggedInUser) {
        return children
    } else if (redirectToLogin == null) {
        api().get('/get_logged_in_user').then(res => {
            if (!res.data.error) {
                dispatch({type: 'SET_USER', payload: res.data})
            } else {
                setRedirectToLogin(true)
            }
        }).catch(err => {
            setRedirectToLogin(true)
            console.log(err)
        })
    }
    if (redirectToLogin === true) {
        return <Redirect to={'/login'}/>
    }
    if (redirectToLogin === false) {
        return children
    }
    return (
        <Backdrop open={true}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
}

export default function () {
    return (
        <Router>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
                <ProvideAuth>
                    <Route exact path={'/users'} component={Users}/>
                    <Route exact path={'/'} component={Contents}/>
                    <Route exact path={'/add_content'} component={AddContent}/>
                    <Route exact path={'/edit_content'} component={EditContent}/>
                </ProvideAuth>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
