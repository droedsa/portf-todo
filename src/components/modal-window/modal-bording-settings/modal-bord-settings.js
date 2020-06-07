import React from "react";
import {connect} from "react-redux";
import './modal-bord-settings.css'

import {
    modalPrioritySettingsNewOpen, modalPrioritySettingsChangeOpen,
    modalPrioritySettingsClose, modalPrioritySettingsColorChange, modalPrioritySettingsDelete
} from "../../../actions/modalAC";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import ModalBordSettingsAddContainer from "./modal-bord-settings-add/modal-bordSettings-add-container";
import ColorPicker from "./colorPicker/colorPicker";
import {deleteTaskPriority} from "../../../actions/bordAC";
import ModalBordSettingsChangeContainer from "./modal-bord-settings-change/modal-bord-settings-change";

const ModalBordSettings = ({
                               priorities, closeModal, show, changeColor,
                               openAddNewModal, deletePriority, openChangeMenu, deleteTaskPriority
                           }) => {
    const delPriority = (item, id) => {
        console.log();
        deleteTaskPriority(item);
        deletePriority(id);
    }

    return <Dialog
        open={show}
        fullWidth
    >
        <DialogTitle>Настройка приоритетов</DialogTitle>
        <DialogContent>
            {
                priorities.map(({color, priority, id}) =>
                    <div className='priority-settings' key={id}>
                        <ColorPicker color={color} priority={priority} changeColor={changeColor}
                                     deletePriority={(item, id) => delPriority(item, id)}
                                     openChangeMenu={openChangeMenu} id={id}/>
                    </div>)
            }

            <ModalBordSettingsAddContainer/>
            <ModalBordSettingsChangeContainer/>

        </DialogContent>
        <DialogActions>
            <Button onClick={openAddNewModal} color="primary">
                Добавить приоритет
            </Button>
            <Button onClick={closeModal} color="primary" autoFocus>
                Закрыть
            </Button>
        </DialogActions>
    </Dialog>
};

const mapStateToProps = ({
                             prioritySettings: {priorities, show}, closeModal, changeColor,
                             openAddNewModal, deletePriority, openChangeMenu, deleteTaskPriority
                         }) => {
    return {
        priorities, closeModal, show, changeColor,
        openAddNewModal, deletePriority, openChangeMenu, deleteTaskPriority
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(modalPrioritySettingsClose()),
        changeColor: (id, color) => dispatch(modalPrioritySettingsColorChange(id, color)),
        openAddNewModal: () => dispatch(modalPrioritySettingsNewOpen()),
        deletePriority: (id) => dispatch(modalPrioritySettingsDelete(id)),
        openChangeMenu: (id) => dispatch(modalPrioritySettingsChangeOpen(id)),
        deleteTaskPriority: (priority) => dispatch(deleteTaskPriority(priority))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalBordSettings);