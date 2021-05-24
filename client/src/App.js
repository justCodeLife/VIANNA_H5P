import {StylesProvider, jssPreset, MuiThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from "@material-ui/core";
import {create} from 'jss';
import rtl from 'jss-rtl';
import Router from "./router";
import store from "./store";
import {Provider} from 'react-redux'
import {useState} from "react";
import ThemeContext from "./contexts/theme";
import './App.css'
import Cookies from 'js-cookie';

export default function App() {
    const [darkMode, setDarkMode] = useState(Cookies.get('theme') ? Cookies.get('theme') : 'light')
    const theme = createMuiTheme({
        direction: 'rtl',
        palette: {
            type: darkMode,
            primary: {
                main: '#1E90FF',
            },
        },
    });
    const jss = create({plugins: [...jssPreset().plugins, rtl()]});
    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <StylesProvider jss={jss}>
                    <MuiThemeProvider theme={theme}>
                        <Router/>
                    </MuiThemeProvider>
                </StylesProvider>
            </ThemeContext.Provider>
        </Provider>
    );
}