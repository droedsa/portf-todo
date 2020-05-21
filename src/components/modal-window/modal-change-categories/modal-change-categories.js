import React from "react";
import {connect} from "react-redux";
import {
    modalCategoriesDelete,
    modalChangeCategoriesClose,
    modalChangeCategoriesSave,
    modalChangeCategoriesTextChange
} from "../../../actions/modalAC";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const ModalChangeCategories = ({
                                   modalClose, modalChangeText, modalSaveBtnText,
                                   modalChangeCategoriesState, modalDeleteBtn
                               }) => {
    const {open, text} = modalChangeCategoriesState;

    return <Dialog
        open={open}
        fullWidth={true}
    >
        <DialogTitle>Изменение категории</DialogTitle>
        <DialogContent>
            <TextField fullWidth={true} value={text} onChange={event => modalChangeText(event.target.value)}
                       id="standard-basic" label="Название (10 символов)"/>
        </DialogContent>
        <DialogActions>
            <Button onClick={modalSaveBtnText} color="primary">
                Сохранить
            </Button>
            <Button onClick={modalDeleteBtn} color="primary">
                Удалить
            </Button>
            <Button onClick={modalClose} color="primary" autoFocus>
                Закрыть
            </Button>
        </DialogActions>
    </Dialog>
};

const mapStateToProps = ({
                             categories: {modals: {modalChangeCategoriesState}},
                             modalClose, modalChangeText, modalSaveBtnText, modalDeleteBtn
                         }) => {
    return {
        modalClose, modalChangeText, modalSaveBtnText, modalChangeCategoriesState, modalDeleteBtn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalChangeCategoriesClose()),
        modalChangeText: (text) => dispatch(modalChangeCategoriesTextChange(text)),
        modalSaveBtnText: () => dispatch(modalChangeCategoriesSave()),
        modalDeleteBtn: () => dispatch(modalCategoriesDelete())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalChangeCategories);