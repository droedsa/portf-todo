import React from 'react';
import {connect} from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {
    modalChangeTaskClose, modalChangeTaskSave
} from "../../../actions/bordAC";
import FormChangeTask from "./modal-change-task";

const ModalChangeTaskContainer = ({customCategories, priorities, modalClose, changeTask, modalSave}) => {
    const {show, name, priority, categories} = changeTask;
    const initialForm = {name, priority, categories}
    const handleSubmit = (values) => {
        modalSave(values);
    }

    return (
        <Dialog
            open={show}
            fullWidth
        >
            <DialogTitle>Добавление задачи</DialogTitle>
            <FormChangeTask onSubmit={handleSubmit}
                            categories={customCategories}
                            priorities={priorities}
                            modalClose={modalClose}
                            initialValues={initialForm}
            />
        </Dialog>
    );
};

const mapStateToProps = ({
                             categories: {customCategories}, prioritySettings: {priorities},
                             bord: {modal: {changeTask}}, modalClose, modalSave
                         }) => {
    return {
        customCategories, priorities, changeTask, modalClose, modalSave
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalChangeTaskClose()),
        modalSave: (values) => dispatch(modalChangeTaskSave(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalChangeTaskContainer);