import React from "react";
import Modal from 'react-modal'
// import './modal-add-categories.css'
import {connect} from "react-redux";
import {
    modalAddCategoriesChangeTextModal,
    modalAddCategoriesCloseModal,
    modalAddCategoriesSaveBtnModal
} from "../../../actions/modalAC";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";


const ModalAddCategories = ({modals, modalClose, modalChangeText, modalSaveBtnText}) => {
    const {modalAddCategoriesState: {open, text}} = modals;
    return <Dialog
        open={open}
        >
            <DialogTitle style={{width:400}}>Добавление категории</DialogTitle>
            <DialogContent>
                <TextField style={{width:400}} value={text} onChange={event => modalChangeText(event.target.value)}
                           id="standard-basic" label="Название (10 символов)"/>
            </DialogContent>
            <DialogActions>
                <Button onClick={modalSaveBtnText} color="primary">
                    Сохранить
                </Button>
                <Button onClick={modalClose} color="primary" autoFocus>
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
};

const mapStateToProps = ({categories: {modals},modalClose,modalChangeText,modalSaveBtnText}) => {
    return {
        modals, modalClose, modalChangeText, modalSaveBtnText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalAddCategoriesCloseModal()),
        modalChangeText: (text) => dispatch(modalAddCategoriesChangeTextModal(text)),
        modalSaveBtnText: () => dispatch(modalAddCategoriesSaveBtnModal()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalAddCategories);