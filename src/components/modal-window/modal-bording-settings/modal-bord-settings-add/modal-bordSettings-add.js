import React from 'react';
import { reduxForm} from "redux-form";
import ModalInput from "../../modal-input-item/modal-input";

const ModalBordSettingsAdd = ({handleSubmit,modalClose}) => {
    return (
        <ModalInput handleSubmit={handleSubmit} modalClose={modalClose}/>
    );
};

const FormAddPriority = reduxForm({
    form: 'add-priority'
})(ModalBordSettingsAdd);

export default FormAddPriority;