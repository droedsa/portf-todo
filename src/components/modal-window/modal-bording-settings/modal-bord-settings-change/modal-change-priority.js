import React from 'react';
import {reduxForm} from "redux-form";
import ModalInput from "../../modal-input-item/modal-input";

const ChangePriority = ({handleSubmit, modalClose, modalDelete}) => {
    return (
       <ModalInput handleSubmit={handleSubmit} modalClose={modalClose} modalDelete={modalDelete}/>
    );
};

const FormChangePriority = reduxForm({
    form: 'change-priority'
})(ChangePriority);

export default FormChangePriority;