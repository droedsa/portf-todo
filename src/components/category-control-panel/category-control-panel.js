import React from "react";
import './category-control-panel.css'
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
import CreateIcon from '@material-ui/icons/Create';

const CategoryControlPanel = ({
                                  selected, allTasK, customCategories,
                                  openModalAddCategories, openModalChangeCategories,
                                  changeCategories, searchText, changeSearchInput, show,
                                  classes, handleDrawerClose, theme, open, tasks
                              }) => {
    const customCat = customCategories.map(item => {
        const countTask = tasks.filter(task => task.categories === item.name).length;


        if (item.name.includes(searchText)) {
            return <Paper elevation={4} key={item.id}
                          style={{
                              backgroundColor: item.name === selected ? '#512da8' : null,
                              color: item.name === selected ? "white" : "black"
                          }}
                          className={`сustom-categories categories-tasks`}>
                <div className="task">
                    <h4 onClick={() => changeCategories(item.name)} className='task-title'>{item.name}</h4>
                </div>
                <i onClick={() => openModalChangeCategories(item.id)} className="fas fa-pencil-alt pen-block"/>
                <p className='task-number'>{countTask}</p>
            </Paper>
        } else return null
    });

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
                    <TextField id="standard-basic" label="Поиск категорий"/>
                    <Paper elevation={4} style={{
                        backgroundColor: 'Все' === selected ? '#512da8' : null,
                        color: 'Все' === selected ? "white" : "black"
                    }}
                           className='сustom-categories categories-tasks'>
                        <div className='task'>
                            <h4 onClick={() => changeCategories('Все')} className='task-title'>Все</h4>
                        </div>
                        <p className='task-number'>{tasks.length}</p>
                    </Paper>

                </List>
            </Container>
            <Divider/>
            <Container>
                <List>
                    {customCat}
                </List>
            </Container>
            <ModalAddCategories/>
            <ModalChangeCategories/>
        </Drawer>


    )
};

const mapStateToProps = ({
                             categories: {selected, customCategories, searchText, show},
                             bord: {allTasK, tasks}, openModalAddCategories, openModalChangeCategories,
                             changeCategories, changeSearchInput
                         }) => {
    return {
        selected,
        allTasK,
        customCategories,
        openModalAddCategories,
        openModalChangeCategories,
        changeCategories,
        searchText,
        changeSearchInput,
        show,
        tasks
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryControlPanel);