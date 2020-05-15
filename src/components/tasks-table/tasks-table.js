import React from "react";
import './tasks-table.css'
import {connect} from "react-redux";

const TasksTable = ({tasks}) => {
    const tableBody = tasks.map(item =>
        <tr key={item.id}>
            <td style={{backgroundColor: `${item.color}`}}/>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.term}</td>
            <td>{item.priority}</td>
            <td>{item.categories}</td>
            <td className='d-flex align-items-center action'>
                <button className='action'>
                    <i className="fas fa-trash"/>
                </button>

                <button className='action'>
                    <i className="fas fa-pencil-alt"/>
                </button>
                <div className="custom-control custom-checkbox action">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1"/>
                </div>
            </td>
        </tr>
    );


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

const mapStateToProps = ({bord: {tasks}}) => {
    return {
        tasks
    }
};

const mapDispatchProps = (dispatch) => {
    return{

    }
};

export default connect(mapStateToProps, mapDispatchProps)(TasksTable);