import React from "react";
import Modal from 'react-modal'
import './modal-change-task.css'
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import {
    modalChangeTaskChangeCategories,
    modalChangeTaskChangePriority, modalChangeTaskChangeTerm,
    modalChangeTaskChangeText,
    modalChangeTaskClose,
    modalChangeTaskSave,
} from "../../../actions/bord";


const ModalChangeTask = ({
                             customCategories, priorities, onChangeCategories,
                             onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave, changeTask
                         }) => {

    const {show,name,categories,priority} = changeTask;

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
            <input onChange={event => onChangeText(event.target.value)} value={name} type="text" className='form-control'/>
            <p>Выберите категорию</p>
            <select className='form-control' value={categories} onChange={event => onChangeCategories(event.target.value)}>
                <option  value="Все" >Все</option>
                {
                    customCategories.map(item => <option  key={item.id}
                                                         value={item.name}>{item.name}</option>)
                }
            </select>
            <p>Выберите приоритет</p>
            <select className='form-control' value={priority} onChange={event => onChangePriority(event.target.value)}>
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
                             bord: {modal: {changeTask}},
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
        changeTask
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCategories: (categories) => dispatch(modalChangeTaskChangeCategories(categories)),
        onChangeTerm: (term) => dispatch(modalChangeTaskChangeTerm(term)),
        onChangePriority: (priority) => dispatch(modalChangeTaskChangePriority(priority)),
        onChangeText: (text) => dispatch(modalChangeTaskChangeText(text)),
        btnClose: () => dispatch(modalChangeTaskClose()),
        btnSave: () => dispatch(modalChangeTaskSave())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalChangeTask);