import React from "react";
import {connect} from "react-redux";
import {
    modalPrioritySettingsChangeClose,
    modalPrioritySettingsChangeSave,
} from "../../../../actions/modalAC";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import FormChangePriority from "./modal-change-priority";
import {changeTaskPriority} from "../../../../actions/bordAC";



const ModalBordSettingsChangeContainer = ({modalClose, show, text,
                                                            savePriority,
                                                            changeTask}) => {

    const oldPriority = text;
    const handleSubmit = ({text}) => {
        savePriority(text);
        changeTask(oldPriority,text);
    };

    return (
        <Dialog
            open={show}
            fullWidth
        >
            <DialogTitle>Изменение категории</DialogTitle>
            <FormChangePriority initialValues={{text}}
                                onSubmit={handleSubmit}
                                modalClose={modalClose}
                                modalDelete={null}/>
        </Dialog>
    );
};

const mapStateToProps = ({
                             prioritySettings: {changePriorityText: {show, text}},
                             savePriority, modalClose ,changeTask
                         }) => {
    return {
        modalClose, show, text, savePriority,changeTask
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalPrioritySettingsChangeClose()),
        savePriority: (text) => dispatch(modalPrioritySettingsChangeSave(text)),
        changeTask:(oldP,newP)=> dispatch(changeTaskPriority(oldP,newP))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBordSettingsChangeContainer);