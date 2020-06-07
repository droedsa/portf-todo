import React from 'react';
import {reduxForm} from "redux-form";
import ModalAdd from "../modal-input-item/modal-input";

const AddCategories = ({handleSubmit, modalClose}) => {
    return (
        <ModalAdd  handleSubmit={handleSubmit} modalClose={modalClose}/>
    );
};

const FormAddCategory = reduxForm({
    form: 'add-categories'
})(AddCategories);

export default FormAddCategory;