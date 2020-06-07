import React from 'react';
import {connect} from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {
    modalCategoriesDelete,
    modalChangeCategoriesClose,
    modalChangeCategoriesSave,
} from "../../../actions/modalAC";
import {changeTaskCategories, deleteTaskCategory} from "../../../actions/bordAC";
import FormChangeCategories from "./change-categories";

const ChangeCategoriesContainer = ({
                                       modalClose, modalSaveBtnText,
                                       modalChangeCategoriesState, modalDelete, changeTaskCat,deleteTaskCategory
                                   }) => {
    const {open, text} = modalChangeCategoriesState;
    const oldCategories = text;

    const deleteCategories = () => {
        deleteTaskCategory(oldCategories)
        modalDelete()
    }

    const handleSubmit = (values) => {
        modalSaveBtnText(values.text);
        changeTaskCat(oldCategories, values.text)
    };

    return (
        <Dialog
            open={open}
            fullWidth
        >
            <DialogTitle>Изменение категории</DialogTitle>
            <FormChangeCategories initialValues={{text}} onSubmit={handleSubmit} modalClose={modalClose}
                                  modalDelete={deleteCategories}/>
        </Dialog>

    );
};


const mapStateToProps = ({
                             categories: {modals: {modalChangeCategoriesState}},
                             modalClose, modalSaveBtnText, modalDelete, changeTaskCat,deleteTaskCategory
                         }) => {
    return {
        modalClose, modalSaveBtnText,
        modalChangeCategoriesState, modalDelete, changeTaskCat,deleteTaskCategory
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalChangeCategoriesClose()),
        modalSaveBtnText: (text) => dispatch(modalChangeCategoriesSave(text)),
        modalDelete: () => dispatch(modalCategoriesDelete()),
        changeTaskCat: (oldCategories, newCategories) => dispatch(changeTaskCategories(oldCategories, newCategories)),
        deleteTaskCategory:(category)=>dispatch(deleteTaskCategory(category))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCategoriesContainer);