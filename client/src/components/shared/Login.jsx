import {
    Button,
    CssBaseline,
    TextField,
    Paper,
    Grid,
    Typography,
    makeStyles,
    Snackbar,
    Backdrop, CircularProgress
} from '@material-ui/core';
import {useState} from "react";
import api from "../../service";
import {Redirect} from "react-router-dom";
import bg from '../../assets/images/bg.jpg'
import logo from '../../assets/images/vianna_logo.png'
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(6, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [snackbar, setSnackbar] = useState({open: false, message: ''});
    const [redirectToHome, setRedirectToHome] = useState(false)

    async function login(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await api().post('/login', {username, password})
            if (res.data) {
                setLoading(false)
                if (res.data.success) {
                    dispatch({type: 'SET_USER', payload: res.data.user})
                    dispatch({type: 'SET_TOKEN', payload: res.data.token})
                    setRedirectToHome(true)
                } else {
                    setSnackbar({message: 'اطلاعات ورود نامعتبر است', open: true});
                }
            }
        } catch (e) {
            setLoading(false)
            console.log(e)
            setSnackbar({message: 'ورود با خطا مواجه شد', open: true});
        }
    }

    if (redirectToHome === true || user) {
        if (user.role === 'admin')
            return <Redirect to={'/users'}/>
        else
            return <Redirect to={'/'}/>
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src={logo} alt=""/>
                    <Typography component="h1" variant="h5">
                        سیستم مدیریت H5P
                    </Typography>
                    <form className={classes.form} onSubmit={login}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="نام کاربری"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="رمز عبور"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            ورود
                        </Button>
                    </form>
                </div>
            </Grid>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={snackbar.open}
                      autoHideDuration={2000} onClose={() => setSnackbar({...snackbar, open: false})}
                      message={snackbar.message}/>
            <Backdrop open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Grid>
    );
}