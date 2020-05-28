import React from "react";
import './board.css'
import SortPanel from "../sort panel/sort-panel";
import TasksTable from "../tasks-table/tasks-table";
import {connect} from "react-redux";
import {showCategoryPanel} from "../../actions/CategoriesAC";
import ModalBordSettings from "../modal-window/modal-bording-settings/modal-bord-settings";
import {modalSettingsPriorityOpen} from "../../actions/modalAC";
import ModalAddNewTask from "../modal-window/modal-add-task/modal-add-task";
import {modalCreateTaskOpen, sortPanelStatusPriority, sortPanelStatusTasks, sortPanelText} from "../../actions/bord";
import ModalChangeTask from "../modal-window/modal-change-task/modal-change-task";


const Board = ({
                   priorities, onClickAddNewTask, classes, sortPanel, onChangeTextInSortPanel,
                   onChangeStatusPriorityInSortPanel, onChangeStatusTasksInSortPanel
               }) => {
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <SortPanel priorities={priorities}
                       sortPanel={sortPanel}
                       onClickAddNewTask={() => onClickAddNewTask()}
                       onChangeTextInSortPanel={onChangeTextInSortPanel}
                       onChangeStatusPriorityInSortPanel={onChangeStatusPriorityInSortPanel}
                       onChangeStatusTasksInSortPanel={onChangeStatusTasksInSortPanel}
            />
            <TasksTable/>

            <ModalBordSettings/>
            <ModalAddNewTask/>
            <ModalChangeTask/>
        </main>
    )
};

const mapStateToProps = ({
                             showCP, categories: {selected}, showModalPrioritySettings,
                             prioritySettings: {priorities}, onClickAddNewTask, bord: {sortPanel},
                             onChangeTextInSortPanel, onChangeStatusTasksInSortPanel,
                             onChangeStatusPriorityInSortPanel
                         }) => {
    return {
        showCP,
        selected,
        showModalPrioritySettings,
        priorities,
        onClickAddNewTask,
        sortPanel,
        onChangeTextInSortPanel,
        onChangeStatusTasksInSortPanel,
        onChangeStatusPriorityInSortPanel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showCP: () => dispatch(showCategoryPanel()),
        showModalPrioritySettings: () => dispatch(modalSettingsPriorityOpen()),
        onClickAddNewTask: () => dispatch(modalCreateTaskOpen()),
        onChangeTextInSortPanel: (text) => dispatch(sortPanelText(text)),
        onChangeStatusTasksInSortPanel: (value) => dispatch(sortPanelStatusTasks(value)),
        onChangeStatusPriorityInSortPanel: (value) => dispatch(sortPanelStatusPriority(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);