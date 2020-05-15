import React from "react";
import Modal from 'react-modal'
import './modal-settings-add-categories.css'
import {connect} from "react-redux";
import {
    modalSettingsPriorityAddNewChangeText,
    modalSettingsPriorityAddNewClose, modalSettingsPriorityAddNewSave,
} from "../../../../actions/modalAC";


const ModalSettingsPriorityAddCategories = ({closeModal, show, text, changeModalText,saveNewPriority}) => {
    Modal.setAppElement('#root');
    return <div>
        <Modal
            isOpen={show}
            className="ModalSettingPriorityAdd"
        >
            <div className="modal-header bg-primary">
                <h5 className="modal-title ">Добавление категории</h5>
                <button onClick={closeModal} className='btn'>
                    <i className="fas fa-times"/>
                </button>
            </div>
            <div className="modal-body">
                <input value={text} onChange={event => changeModalText(event.target.value)} type="text"
                       className='form-control'/>
                <button onClick={saveNewPriority} className='btn btn-primary mt-3'>
                    Сохранить
                </button>
            </div>
        </Modal>

    </div>
};

const mapStateToProps = ({closeModal, prioritySettings: {addNewPriority: {show, text}, changeModalText,saveNewPriority}}) => {
    return {
        closeModal, show, text, changeModalText,saveNewPriority
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(modalSettingsPriorityAddNewClose()),
        changeModalText: (text) => dispatch(modalSettingsPriorityAddNewChangeText(text)),
        saveNewPriority:()=> dispatch(modalSettingsPriorityAddNewSave())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalSettingsPriorityAddCategories);