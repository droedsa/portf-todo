import React from "react";
import './categoryl-panel.css'
import {connect} from "react-redux";

import ModalAddCategories from "../modal-window/modal-add-categories/modal-add-categories";
import ModalChangeCategories from "../modal-window/modal-change-categories/modal-change-categories";

import {changeCategoriesClick, changeCategoriesSearchPanel} from "../../actions/CategoriesAC";
import {modalAddCategoriesOpenModal, modalChangeCategoriesOpen} from "../../actions/modalAC";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CategoryItem from "./category-item/category-item";

const CategoryPanel = ({
                           selected, customCategories, openModalAddCategories, openModalChangeCategories,
                           changeCategories, searchText, changeSearchInput, classes, handleDrawerClose,
                           theme, open, tasks
                       }) => {
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <Typography variant='h5' align='center'>
                    Категории
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </div>
            <Divider/>

            <Container>
                <List>
                    <Button onClick={openModalAddCategories} variant='contained'
                            style={{backgroundColor: '#512da8', color: "white"}}
                            fullWidth>
                        Добавить новую
                    </Button>
                </List>
            </Container>

            <Divider/>

            <Container>
                <List>
                    <div className="categories-input">
                        <TextField fullWidth={true} className='categories-input' value={searchText}
                                   onChange={event => changeSearchInput(event.target.value)}
                                   label="Поиск категорий"/>
                    </div>
                    <Paper elevation={4}
                           onClick={() => changeCategories('Все')}
                           style={{
                               backgroundColor: 'Все' === selected ? '#512da8' : null,
                               color: 'Все' === selected ? "white" : "black",
                               cursor: "pointer"
                           }}

                    >
                        <div className='categories-item '>
                            <h4 className='task-item-title'>Все</h4>
                            <div className="number-container">
                                <p className='categories-title-number'>{tasks.length}</p>
                            </div>
                        </div>

                    </Paper>
                </List>
            </Container>
            <Divider/>
            <Container>
                <List>

                    <CategoryItem customCategories={customCategories} tasks={tasks} selected={selected}
                                  changeCategories={changeCategories} searchText={searchText}
                                  openModalChangeCategories={openModalChangeCategories}/>

                </List>
            </Container>
            <ModalAddCategories/>
            <ModalChangeCategories/>
        </Drawer>


    )
};

const mapStateToProps = ({
                             categories: {selected, customCategories, searchText, show},
                             bord: {tasks}, openModalAddCategories, openModalChangeCategories,
                             changeCategories, changeSearchInput
                         }) => {
    return {
        selected, customCategories, openModalAddCategories, openModalChangeCategories, changeCategories,
        searchText, changeSearchInput, show, tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModalAddCategories: () => dispatch(modalAddCategoriesOpenModal()),
        openModalChangeCategories: (id) => dispatch(modalChangeCategoriesOpen(id)),
        changeCategories: (name) => dispatch(changeCategoriesClick(name)),
        changeSearchInput: (text) => dispatch(changeCategoriesSearchPanel(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPanel);