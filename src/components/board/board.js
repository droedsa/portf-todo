import React from "react";
import './board.css'
import SortPanel from "../sort panel/sort-panel";
import StatisticsPanel from "../statistics-panel/statistics-panel";
import TasksTable from "../tasks-table/tasks-table";
import {connect} from "react-redux";
import {showCategoryPanel} from "../../actions/CategoriesAC";
import ModalBordSettings from "../modal-window/modal-bording-settings/modal-bord-settings";
import {modalSettingsPriorityOpen} from "../../actions/modalAC";
import ModalAddNewTask from "../modal-window/modal-add-task/modal-add-task";
import {modalCreateTaskOpen} from "../../actions/bord";
import ModalChangeTask from "../modal-window/modal-change-task/modal-change-task";

const Board = ({showCP, selected, showModalPrioritySettings, priorities, onClickAddNewTask}) => {
    return (
        <div className='container-fluid'>
            <div className="header">
                <div className='header-panel-info'>
                    <button onClick={showCP} className='m-0 p-0 btn'>
                        <i className="fas fa-bars"/>
                    </button>

                    <h4 className='header-all'>{selected}</h4>
                    <h4 className='header-close'>Скрыть статитику</h4>
                </div>
                <button onClick={showModalPrioritySettings} className='m-0 p-0 btn'>
                    <i className="fas fa-cog settings-btn"/>
                </button>
            </div>

            <StatisticsPanel/>
            <SortPanel priorities={priorities} onClickAddNewTask={() => onClickAddNewTask()}/>
            <TasksTable/>

            <ModalBordSettings/>
            <ModalAddNewTask/>
            <ModalChangeTask/>
            <div className="task-bord">

            </div>
        </div>
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