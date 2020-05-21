import React from "react";
import {connect} from "react-redux";
import {changeDoneState, modalChangeTaskOpen, modalDeleteTask} from "../../actions/bord";
import TaskItem from "./task-item/task-item";

const TasksTable = ({tasks, priorities, openChangeModal, deleteTask, doneBtn, selected}) => {
    const selectedTask = tasks.filter(item => item.categories === selected || selected === 'Все');

    return <div>
        <TaskItem selectedTask={selectedTask} priorities={priorities}
                  openChangeModal={openChangeModal} deleteTask={deleteTask}
                  doneBtn={doneBtn}
        />
    </div>
};

const mapStateToProps = ({
                             bord: {tasks},
                             categories: {selected},
                             prioritySettings: {priorities},
                             openChangeModal, deleteTask, doneBtn
                         }) => {
    return {
        tasks, priorities, openChangeModal, deleteTask, doneBtn, selected
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