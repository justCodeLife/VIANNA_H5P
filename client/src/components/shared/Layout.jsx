import {AppBar, CssBaseline, IconButton, Toolbar, Typography, makeStyles, Tooltip} from "@material-ui/core";
import {ExitToApp, Menu as MenuIcon, Add as AddIcon, Brightness3 as DarkMode} from "@material-ui/icons";
import {useHistory, useLocation} from "react-router-dom";
import {useContext, useState} from "react";
import api from "../../service";
import ThemeContext from "../../contexts/theme";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    toolbar: {
        justifyContent: "space-between",
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Layout({Component, title}) {
    const dispatch = useDispatch()
    const [mobileOpen, setMobileOpen] = useState(false);
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    const history = useHistory();
    const classes = useStyles();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function logout() {
        api().post("/logout")
            .then((res) => {
                dispatch({type: 'SET_USER', payload: null})
                history.push("/login")
            }).catch((err) => console.log(err));
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed">
                <Toolbar classes={{root: classes.toolbar}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {title}
                    </Typography>
                    <span>
            <Tooltip title="افزودن">
                <IconButton color="inherit" onClick={() => {
                    if (location.pathname === "/users")
                        dispatch({type: 'SHOW_ADD_USER_MODAL', payload: true})
                    else
                        history.push("/add_content")
                }}>
                <AddIcon/>
              </IconButton>
            </Tooltip>

            <Tooltip title={"حالت شب"}>
              <IconButton
                  color="inherit"
                  onClick={() => {
                      if (darkMode === 'light') {
                          Cookies.set('theme', 'dark')
                          setDarkMode("dark")
                      } else {
                          Cookies.set('theme', 'light')
                          setDarkMode("light")
                      }
                  }
                  }>
                <DarkMode/>
              </IconButton>
            </Tooltip>

            <Tooltip title="خروج">
              <IconButton color="inherit" onClick={logout}>
                <ExitToApp/>
              </IconButton>
            </Tooltip>
          </span>
                </Toolbar>
            </AppBar>
            <Component/>
        </div>
    );
}

export default Layout;
