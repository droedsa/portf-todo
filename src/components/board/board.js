import React, {useEffect, useState} from "react";
import SortPanel from "../sort panel/sort-panel";
import TasksTable from "../tasks-table/tasks-table";
import {connect} from "react-redux";
import ModalBordSettings from "../modal-window/modal-bording-settings/modal-bord-settings";
import {modalPrioritySettingsOpen} from "../../actions/modalAC";
import {
    modalCreateTaskOpen,
    sortPanelStatusPriority,
    sortPanelChangeStatusTasks,
    sortPaneChangelText, initializeTask
} from "../../actions/bordAC";
import ModalAddTaskContainer from "../modal-window/modal-task-add/modal-add-task-container";
import ModalChangeTaskContainer from "../modal-window/modal-task-change/modal-change-task-container";
import {initializeCategories} from "../../actions/CategoriesAC";
import CircularProgress from "@material-ui/core/CircularProgress";

const Board = ({
                   priorities, onClickAddNewTask, classes, sortPanel, onChangeTextInSortPanel,
                   onChangeStatusPriorityInSortPanel, onChangeStatusTasksInSortPanel, taskInitialize,
                   initializeCategories
               }) => {

    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('https://next.json-generator.com/api/json/get/V1Gbh4whd?delay=1000')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Could not fetch this url, received ${res.status}`)
                }
                return res.json()
            })
            .then(data => {

                taskInitialize(data);
                initializeCategories(data);
                setLoad(true);
            }).catch(err => console.log(err))
    }, [])

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
            {
                load ? <TasksTable/> : <CircularProgress/>
            }


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
                             onChangeStatusPriorityInSortPanel, taskInitialize, initializeCategories
                         }) => {
    return {
        selected,
        showModalPrioritySettings,
        priorities,
        onClickAddNewTask,
        sortPanel,
        onChangeTextInSortPanel,
        onChangeStatusTasksInSortPanel,
        onChangeStatusPriorityInSortPanel,
        taskInitialize, initializeCategories

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModalPrioritySettings: () => dispatch(modalPrioritySettingsOpen()),
        onClickAddNewTask: () => dispatch(modalCreateTaskOpen()),
        onChangeTextInSortPanel: (text) => dispatch(sortPaneChangelText(text)),
        onChangeStatusTasksInSortPanel: (value) => dispatch(sortPanelChangeStatusTasks(value)),
        onChangeStatusPriorityInSortPanel: (value) => dispatch(sortPanelStatusPriority(value)),
        taskInitialize: (data) => dispatch(initializeTask(data)),
        initializeCategories: (data) => dispatch(initializeCategories(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);