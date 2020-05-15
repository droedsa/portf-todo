import React from "react";
import Modal from 'react-modal'
import './modal-settings-change-categories.css'
import {connect} from "react-redux";
import {
    modalSettingsPriorityChangeClose,
    modalSettingsPriorityChangeSave,
    modalSettingsPriorityChangeText,
} from "../../../../actions/modalAC";


const ModalSettingsPriorityChangeCategories = ({closeModal, show, text, changeModalText, savePriority}) => {
    Modal.setAppElement('#root');
    return <div>
        <Modal
            isOpen={show}
            className="ModalSettingPriorityChange"
        >
            <div className="modal-header bg-primary">
                <h5 className="modal-title ">Изменение категории</h5>
                <button onClick={closeModal} className='btn'>
                    <i className="fas fa-times"/>
                </button>
            </div>
            <div className="modal-body">
                <input value={text} onChange={event => changeModalText(event.target.value)} type="text"
                       className='form-control'/>
                <button onClick={savePriority} className='btn btn-primary mt-3'>
                    Сохранить
                </button>
            </div>
        </Modal>

    </div>
};

const mapStateToProps = ({
                             closeModal, prioritySettings: {changePriorityText: {show, text}}, changeModalText,
                             savePriority
                         }) => {
    return {
        closeModal, show, text, changeModalText, savePriority
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(modalSettingsPriorityChangeClose()),
        changeModalText: (text) => dispatch(modalSettingsPriorityChangeText(text)),
        savePriority: (id) => dispatch(modalSettingsPriorityChangeSave(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalSettingsPriorityChangeCategories);