import React from "react";
import Modal from 'react-modal'
import './modal-settings-add-categories.css'
import {connect} from "react-redux";
import {
    modalSettingsPriorityAddNewChangeText,
    modalSettingsPriorityAddNewClose, modalSettingsPriorityAddNewSave,
} from "../../../../actions/modalAC";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";


const ModalSettingsPriorityAddCategories = ({closeModal, show, text, changeModalText,saveNewPriority}) => {
    return <Dialog
            open={show}
        >
            <DialogTitle style={{width: 400}}>Добавление категории</DialogTitle>
            <DialogContent>
                <TextField style={{width: 400}} value={text} onChange={event => changeModalText(event.target.value)}
                           id="standard-basic" label="Название (10 символов)"/>
            </DialogContent>
            <DialogActions>
                <Button onClick={saveNewPriority}  color="primary">
                    Сохранить
                </Button>
                <Button onClick={closeModal} color="primary" autoFocus>
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
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