import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Button from "@material-ui/core/Button";
import {modalSettingsPriorityOpen} from "../../actions/modalAC";
import {connect} from "react-redux";



const Header =({classes,handleDrawerOpen,open,showModalPrioritySettings})=>{
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography style={{flexGrow: 1}}  variant="h6" noWrap>
                    To-Do
                </Typography>
                <Button onClick={showModalPrioritySettings} color="inherit">
                    <i className="fas fa-cog settings-btn"/>
                </Button>
            </Toolbar>
        </AppBar>
    )
};




const mapStateToProps = ({showModalPrioritySettings}) => {
    return {
        showModalPrioritySettings
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModalPrioritySettings: () => dispatch(modalSettingsPriorityOpen())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header)
