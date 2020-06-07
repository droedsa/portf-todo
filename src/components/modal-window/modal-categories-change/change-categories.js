import React from 'react';
import {reduxForm} from "redux-form";

import ModalAdd from "../modal-input-item/modal-input";

const ChangeCategories = ({handleSubmit, modalClose, modalDelete}) => {
    return (
       <ModalAdd handleSubmit={handleSubmit} modalClose={modalClose} modalDelete={modalDelete}/>
    );
};

const FormChangeCategories = reduxForm({
    form: 'change-categories'
})(ChangeCategories);

export default FormChangeCategories;