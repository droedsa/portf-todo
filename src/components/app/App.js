import React from 'react';
import './app.css'
import Board from "../board/board";
import CategoryControlPanel from "../category-control-panel/category-panel";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Header from "../header/header";


const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#512da8',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        backgroundColor: '#512da8',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const App = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <CssBaseline>
                <Header classes={classes} handleDrawerOpen={handleDrawerOpen} open={open}/>
                <CategoryControlPanel theme={theme} classes={classes} handleDrawerClose={handleDrawerClose}
                                      open={open}/>
                <Board classes={classes} open={open}/>
            </CssBaseline>
        </div>
    );
}

export default App;
