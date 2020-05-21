import React from "react";
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
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const ModalBordSettings = ({
                               priorities, closeModal, show, changeColor,
                               openAddNewModal, deletePriority, openChangeMenu
                           }) => {
    return <Dialog
        open={show}
        fullWidth={true}
    >
        <DialogTitle>Настройка приоритетов</DialogTitle>
        <DialogContent>
            {
                priorities.map(({color, priority, id}) =>
                    <div className='priority-settings' key={id}>
                        <ColorPicker color={color} priority={priority} changeColor={changeColor}
                                     deletePriority={deletePriority} openChangeMenu={openChangeMenu} id={id}/>
                    </div>)
            }
            <ModalSettingsPriorityAddCategories/>
            <ModalSettingsPriorityChangeCategories/>
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
                             openAddNewModal, deletePriority, openChangeMenu
                         }) => {
    return {
        priorities, closeModal, show, changeColor,
        openAddNewModal, deletePriority, openChangeMenu
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