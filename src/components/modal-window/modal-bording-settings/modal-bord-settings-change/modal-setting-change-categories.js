import React from "react";
import Modal from 'react-modal'
import './modal-settings-change-categories.css'
import {connect} from "react-redux";
import {
    modalSettingsPriorityChangeClose,
    modalSettingsPriorityChangeSave,
    modalSettingsPriorityChangeText,
} from "../../../../actions/modalAC";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";


const ModalSettingsPriorityChangeCategories = ({closeModal, show, text, changeModalText, savePriority}) => {
    Modal.setAppElement('#root');
    return <Dialog
        open={show}
    >
        <DialogTitle style={{width: 400}}>Изменение категории</DialogTitle>
        <DialogContent>
            <TextField style={{width: 400}} value={text} onChange={event => changeModalText(event.target.value)}
                       id="standard-basic" label="Название (10 символов)"/>
        </DialogContent>
        <DialogActions>
            <Button onClick={savePriority} color="primary">
                Сохранить
            </Button>
            <Button onClick={closeModal} color="primary" autoFocus>
                Закрыть
            </Button>
        </DialogActions>
    </Dialog>

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