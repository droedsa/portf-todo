import React from "react";
import Modal from 'react-modal'
import './modal-add-task.css'
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import {
    modalCreateTaskChangeCategories,
    modalCreateTaskChangePriority,
    modalCreateTaskChangeTerm, modalCreateTaskChangeText, modalCreateTaskClose, modalCreateTaskSave
} from "../../../actions/bord";


const ModalAddNewTask = ({
                             customCategories, priorities, onChangeCategories,
                             onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave, createTask
                         }) => {

    const {show} = createTask;

    Modal.setAppElement('#root');
    return <Modal
        isOpen={show}
        className="ModalAddNewTask"

    >
        <div className="modal-header bg-primary">
            <h2>Добавление задачи</h2>
        </div>
        <div className="modal-body">
            <p>Название</p>
            <input onChange={event => onChangeText(event.target.value)} type="text" className='form-control'/>
            <p>Выберите категорию</p>
            <select className='form-control' defaultValue={'Все'} onChange={event => onChangeCategories(event.target.value)}>
                <option  value="Все" >Все</option>
                {
                    customCategories.map(item => <option  key={item.id}
                                                         value={item.name}>{item.name}</option>)
                }
            </select>
            <p>Выберите приоритет</p>
            <select className='form-control' onChange={event => onChangePriority(event.target.value)}>
                <option></option>
                {
                    priorities.map(item => <option  key={item.id}
                                                   value={item.priority}>{item.priority}</option>)
                }
            </select>
            {/*<DatePicker*/}
            {/*    onChange={event => console.log(event)}*/}
            {/*    value={term}*/}
            {/*    inputFormat={'MM/DD/YY'}*/}
            {/*/>*/}
            <div className="btn-group">
                <button onClick={btnSave} className='btn btn-primary'>
                    Сохранить
                </button>
                <button onClick={btnClose} className='btn btn-primary'>
                    Отменить
                </button>
            </div>


        </div>
    </Modal>
};

const mapStateToProps = ({
                             categories: {customCategories}, prioritySettings: {priorities},
                             bord: {modal: {createTask}},
                             onChangeCategories, onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave
                         }) => {
    return {
        customCategories,
        priorities,
        onChangeCategories,
        onChangeTerm,
        onChangePriority,
        onChangeText,
        btnClose,
        btnSave,
        createTask
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCategories: (categories) => dispatch(modalCreateTaskChangeCategories(categories)),
        onChangeTerm: (term) => dispatch(modalCreateTaskChangeTerm(term)),
        onChangePriority: (priority) => dispatch(modalCreateTaskChangePriority(priority)),
        onChangeText: (text) => dispatch(modalCreateTaskChangeText(text)),
        btnClose: () => dispatch(modalCreateTaskClose()),
        btnSave: () => dispatch(modalCreateTaskSave())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalAddNewTask);