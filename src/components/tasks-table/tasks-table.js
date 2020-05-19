import React from "react";
import './tasks-table.css'
import {connect} from "react-redux";
import {changeDoneState, modalChangeTaskOpen, modalDeleteTask} from "../../actions/bord";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import categoriesPanel from "../../reducers/categoriesPanel";

const TasksTable = ({tasks, priorities, openChangeModal, deleteTask, doneBtn,selected}) => {
    const selectedTask = tasks.filter(item=>item.categories === selected||selected==='Все');
    const tableBody = selectedTask.map(item => {

        const color = priorities.find(({priority}) => priority === item.priority);
        console.log(color);
        const colorStyle = typeof color === 'undefined' ? 'white':color.color;
        return <TableRow key={item.id}>
            <TableCell

                style={{backgroundColor: colorStyle}}
            />
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.term}</TableCell>
            <TableCell>{item.priority}</TableCell>
            <TableCell>{item.categories}</TableCell>
            <TableCell className='d-flex align-items-center action'>
                <Button onClick={() => deleteTask(item.id)} className='action'>
                    <i className="fas fa-trash"/>
                </Button>

                <Button onClick={() => openChangeModal(item.id)} className='action'>
                    <i className="fas fa-pencil-alt"/>
                </Button>
                    <Checkbox
                        checked={item.done}
                        onChange={() => doneBtn(item.id)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
            </TableCell>
        </TableRow>
    });


    return <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className='color'/>
                    <TableCell>#</TableCell>
                    <TableCell>Название</TableCell>
                    <TableCell>Срок</TableCell>
                    <TableCell>Приоритет</TableCell>
                    <TableCell>Категория</TableCell>
                    <TableCell>Действие</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {tableBody}
            </TableBody>
        </Table>

    </TableContainer>
};

const mapStateToProps = ({bord: {tasks},categories:{selected}, prioritySettings: {priorities}, openChangeModal, deleteTask, doneBtn}) => {
    return {
        tasks, priorities, openChangeModal, deleteTask, doneBtn,selected
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