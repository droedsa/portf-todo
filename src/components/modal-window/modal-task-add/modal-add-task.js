import React from 'react';
import {reduxForm} from "redux-form";
import ModalTaskItem from "../modal-task-item/modal-task-item";

const ModalAddTask = ({handleSubmit, categories, priorities, modalClose}) => {
    return (
        <ModalTaskItem handleSubmit={handleSubmit}
                       categories={categories}
                       priorities={priorities}
                       modalClose={modalClose}
        />
    );
};

const FormAddTask = reduxForm({
    form: 'add-task'
})(ModalAddTask);
export default FormAddTask;