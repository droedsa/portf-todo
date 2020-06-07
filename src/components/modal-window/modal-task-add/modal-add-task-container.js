import React from 'react';
import {connect} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormAddTask from "./modal-add-task";
import {modalCreateTaskClose, modalCreateTaskSave} from "../../../actions/bordAC";


const ModalAddTaskContainer = ({
                                   customCategories, priorities, modalClose, modalSave, show
                               }) => {

    const handleSubmit = (values) => {
        modalSave(values)
    };

    return (
        <Dialog
            open={show}
            fullWidth
        >
            <DialogTitle>Добавление задачи</DialogTitle>

            <FormAddTask onSubmit={handleSubmit}
                         categories={customCategories}
                         priorities={priorities}
                         modalClose={modalClose}/>
        </Dialog>
    );
};

const mapStateToProps = ({
                             categories: {customCategories}, prioritySettings: {priorities},
                             modalClose, modalSave, bord: {modal: {createTask: {show}}}
                         }) => {
    return {
        customCategories, priorities, modalClose, modalSave, show
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalCreateTaskClose()),
        modalSave: (values) => dispatch(modalCreateTaskSave(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddTaskContainer);