import React from "react";
import Modal from 'react-modal'
import './modal-bord-settings.css'
import {connect} from "react-redux";
import ColorPicker from "./colorPicker/colorPicker";
import {
    modalSettingsPriorityAddNewOpen, modalSettingsPriorityChangeOpen,
    modalSettingsPriorityClose,
    modalSettingsPriorityColorChange, modalSettingsPriorityDelete
} from "../../../actions/modalAC";
import ModalSettingsPriorityAddCategories from "./modal-bord-settings-add/modal-settings-add-categories";
import ModalSettingsPriorityChangeCategories from "./modal-bord-settings-change/modal-setting-change-categories";

const ModalBordSettings = ({priorities, closeModal, show, changeColor, openAddNewModal, deletePriority, openChangeMenu}) => {
    Modal.setAppElement('#root');
    return <Modal
        isOpen={show}
        className="ModalBordSettings"

    >
        <div className="modal-header bg-primary">
            <h5 className="modal-title ">Настройка приоритетов</h5>
            <button onClick={closeModal} className='btn'>
                <i className="fas fa-times"/>
            </button>
        </div>
        <div className="modal-body">
            {
                priorities.map(({color, priority, id}) =>
                    <div className='priority-settings' key={id}>
                        <ColorPicker color={color} priority={priority} changeColor={changeColor}
                                     deletePriority={deletePriority} openChangeMenu={openChangeMenu} id={id}/>
                    </div>)
            }
            <button onClick={openAddNewModal} className='btn btn-primary'>
                Добавить приоритет
            </button>
            <ModalSettingsPriorityAddCategories/>
            <ModalSettingsPriorityChangeCategories/>
        </div>


    </Modal>
};

const mapStateToProps = ({
                             prioritySettings: {priorities, show}, closeModal, changeColor,
                             openAddNewModal, deletePriority, openChangeMenu
                         }) => {
    return {
        priorities,
        closeModal,
        show,
        changeColor,
        openAddNewModal,
        deletePriority,
        openChangeMenu
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(modalSettingsPriorityClose()),
        changeColor: (id, color) => dispatch(modalSettingsPriorityColorChange(id, color)),
        openAddNewModal: () => dispatch(modalSettingsPriorityAddNewOpen()),
        deletePriority: (id) => dispatch(modalSettingsPriorityDelete(id)),
        openChangeMenu: (id) => dispatch(modalSettingsPriorityChangeOpen(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalBordSettings);