import React from 'react';
import {connect} from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import FormAddPriority from "./modal-bordSettings-add";
import {
    modalPrioritySettingsNewClose,
    modalPrioritySettingsNewSave
} from "../../../../actions/modalAC";


const ModalBordSettingsAddContainer = ({closeModal, show, savePriority}) => {

    const handleSubmit = (values) => {
        savePriority(values.text);
    };

    return (
        <Dialog
            open={show}
            fullWidth
        >
            <DialogTitle>Добавление категории</DialogTitle>
            <FormAddPriority onSubmit={handleSubmit} modalClose={closeModal}/>

        </Dialog>
    );
};

const mapStateToProps = ({closeModal, prioritySettings: {addNewPriority: {show}, savePriority}}) => {
    return {
        closeModal, show, savePriority
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(modalPrioritySettingsNewClose()),
        savePriority: (text) => dispatch(modalPrioritySettingsNewSave(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBordSettingsAddContainer);