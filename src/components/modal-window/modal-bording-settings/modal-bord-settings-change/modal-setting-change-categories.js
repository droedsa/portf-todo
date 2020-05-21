import React from "react";
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

    return <Dialog
        fullWidth={true}
        open={show}
    >
        <DialogTitle fullWidth={true} >Изменение категории</DialogTitle>
        <DialogContent>
            <TextField fullWidth={true} value={text} onChange={event => changeModalText(event.target.value)}
                       id="standard-basic" label="Название (10 символов)"/>
        </DialogContent>
        <DialogActions  fullWidth={true}>
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
                             prioritySettings: {changePriorityText: {show, text}},
                             changeModalText, savePriority , closeModal
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