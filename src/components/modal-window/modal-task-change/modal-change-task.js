import React from 'react';
import {reduxForm} from "redux-form";
import ModalTaskItem from "../modal-task-item/modal-task-item";

const ModalChangeTask = ({handleSubmit, categories, priorities, modalClose}) => {
    return (
        <ModalTaskItem handleSubmit={handleSubmit}
                       categories={categories}
                       priorities={priorities}
                       modalClose={modalClose}
        />
    );
};

const FormChangeTask = reduxForm({
    form: 'change-task'
})(ModalChangeTask);

export default FormChangeTask;