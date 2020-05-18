import React from "react";
import './tasks-table.css'
import {connect} from "react-redux";
import {changeDoneState, modalChangeTaskOpen, modalDeleteTask} from "../../actions/bord";

const TasksTable = ({tasks, priorities, openChangeModal, deleteTask,doneBtn}) => {
    const tableBody = tasks.map(item => {
        const color = priorities.find(({priority}) => priority === item.priority);
        return <tr key={item.id}>
            <td
                style={{backgroundColor: color.color}}
            />
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.term}</td>
            <td>{item.priority}</td>
            <td>{item.categories}</td>
            <td className='d-flex align-items-center action'>
                <button onClick={() => deleteTask(item.id)} className='action'>
                    <i className="fas fa-trash"/>
                </button>

                <button onClick={() => openChangeModal(item.id)} className='action'>
                    <i className="fas fa-pencil-alt"/>
                </button>
                <div className="custom-control custom-checkbox action">
                    <input checked={item.done} onChange={()=> doneBtn(item.id)} type="checkbox"/>
                </div>
            </td>
        </tr>
    });


    return <table className="table">
        <thead>
        <tr>
            <th className='color'/>
            <th className='id'>#</th>
            <th className='name'>Название</th>
            <th className='date'>Срок</th>
            <th className='priority'>Приоритет</th>
            <th className='categoriess'>Категория</th>
            <th className='action'>Действие</th>
        </tr>
        </thead>

        <tbody>
        {tableBody}
        </tbody>
    </table>
};

const mapStateToProps = ({bord: {tasks}, prioritySettings: {priorities}, openChangeModal, deleteTask,doneBtn}) => {
    return {
        tasks, priorities, openChangeModal, deleteTask,doneBtn
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