import React from "react";
import {connect} from "react-redux";
import {changeDoneState, modalChangeTaskOpen, modalDeleteTask} from "../../actions/bord";
import TaskItem from "./task-item/task-item";
import StatisticsPanel from "../statistics-panel/statistics-panel";

const TasksTable = ({tasks, priorities, openChangeModal, deleteTask, doneBtn, selected,sortPanel}) => {
    const selectedTask = tasks.filter(item => item.categories === selected || selected === 'Все');
    return <div>
        <StatisticsPanel selectedTask={selectedTask}/>
        <TaskItem selectedTask={selectedTask} priorities={priorities}
                  openChangeModal={openChangeModal} deleteTask={deleteTask}
                  doneBtn={doneBtn} sortPanel={sortPanel}
        />
    </div>
};

const mapStateToProps = ({
                             bord: {tasks,sortPanel},
                             categories: {selected},
                             prioritySettings: {priorities},
                             openChangeModal, deleteTask, doneBtn
                         }) => {
    return {
        tasks, priorities, openChangeModal, deleteTask, doneBtn, selected,sortPanel
    }
};

const mapDispatchProps = (dispatch) => {
    return {
        openChangeModal: (id) => dispatch(modalChangeTaskOpen(id)),
        deleteTask: (id) => dispatch(modalDeleteTask(id)),
        doneBtn: (id) => dispatch(changeDoneState(id))
    }
};

export default connect(mapStateToProps, mapDispatchProps)(TasksTable);