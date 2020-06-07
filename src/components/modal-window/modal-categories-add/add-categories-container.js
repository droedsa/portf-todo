import React from 'react';
import {connect} from "react-redux";

import DialogTitle from "@material-ui/core/DialogTitle";

import Dialog from "@material-ui/core/Dialog";
import {
    modalAddCategoriesClose,
    modalAddCategoriesSave
} from "../../../actions/modalAC";
import FormAddCategory from "./add-categories";


const AddCategoriesContainer = ({modals, modalClose, modalSaveBtnText}) => {
    const {modalAddCategoriesState: {open}} = modals;

    const handleSubmit = (values) => {
        modalSaveBtnText(values.text);
    };

    return (

        <Dialog
            open={open}
            fullWidth={true}
        >
            <DialogTitle>Добавление категории</DialogTitle>
            <FormAddCategory onSubmit={handleSubmit}  modalClose={modalClose}/>

        </Dialog>

    );
};

const mapStateToProps = ({categories: {modals}, modalClose, modalChangeText, modalSaveBtnText}) => {
    return {
        modals, modalClose, modalChangeText, modalSaveBtnText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalAddCategoriesClose()),
        modalSaveBtnText: (text) => dispatch(modalAddCategoriesSave(text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoriesContainer);