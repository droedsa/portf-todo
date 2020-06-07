import React from "react";
import SortPanel from "../sort panel/sort-panel";
import TasksTable from "../tasks-table/tasks-table";
import {connect} from "react-redux";
import ModalBordSettings from "../modal-window/modal-bording-settings/modal-bord-settings";
import {modalPrioritySettingsOpen} from "../../actions/modalAC";
import {
    modalCreateTaskOpen,
    sortPanelStatusPriority,
    sortPanelChangeStatusTasks,
    sortPaneChangelText
} from "../../actions/bordAC";
import ModalAddTaskContainer from "../modal-window/modal-task-add/modal-add-task-container";
import ModalChangeTaskContainer from "../modal-window/modal-task-change/modal-change-task-container";

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
            <ModalAddTaskContainer/>
            <ModalBordSettings/>
            <ModalChangeTaskContainer/>
        </main>
    )
};

const mapStateToProps = ({
                             categories: {selected}, showModalPrioritySettings,
                             prioritySettings: {priorities}, onClickAddNewTask, bord: {sortPanel},
                             onChangeTextInSortPanel, onChangeStatusTasksInSortPanel,
                             onChangeStatusPriorityInSortPanel
                         }) => {
    return {
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
        showModalPrioritySettings: () => dispatch(modalPrioritySettingsOpen()),
        onClickAddNewTask: () => dispatch(modalCreateTaskOpen()),
        onChangeTextInSortPanel: (text) => dispatch(sortPaneChangelText(text)),
        onChangeStatusTasksInSortPanel: (value) => dispatch(sortPanelChangeStatusTasks(value)),
        onChangeStatusPriorityInSortPanel: (value) => dispatch(sortPanelStatusPriority(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);