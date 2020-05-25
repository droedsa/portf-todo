import React from "react";
import './board.css'
import SortPanel from "../sort panel/sort-panel";
import TasksTable from "../tasks-table/tasks-table";
import {connect} from "react-redux";
import {showCategoryPanel} from "../../actions/CategoriesAC";
import ModalBordSettings from "../modal-window/modal-bording-settings/modal-bord-settings";
import {modalSettingsPriorityOpen} from "../../actions/modalAC";
import ModalAddNewTask from "../modal-window/modal-add-task/modal-add-task";
import {modalCreateTaskOpen} from "../../actions/bord";
import ModalChangeTask from "../modal-window/modal-change-task/modal-change-task";
import clsx from "clsx";


const Board = ({ priorities, onClickAddNewTask, classes, open}) => {
    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader}/>
                <SortPanel priorities={priorities} onClickAddNewTask={() => onClickAddNewTask()}/>
                <TasksTable/>

                <ModalBordSettings/>
                <ModalAddNewTask/>
                <ModalChangeTask/>


        </main>


    )
};

const mapStateToProps = ({showCP, categories: {selected}, showModalPrioritySettings, prioritySettings: {priorities}, onClickAddNewTask}) => {
    return {
        showCP, selected, showModalPrioritySettings, priorities, onClickAddNewTask
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showCP: () => dispatch(showCategoryPanel()),
        showModalPrioritySettings: () => dispatch(modalSettingsPriorityOpen()),
        onClickAddNewTask: () => dispatch(modalCreateTaskOpen())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);