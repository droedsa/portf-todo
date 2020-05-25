import React, {useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Field, reduxForm} from "redux-form";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {connect} from "react-redux";
import {modalAddCategoriesCloseModal} from "../../../actions/modalAC";

const ModalAddRedux = ({handleSubmit}) => {



    const renderTextField = ({label, input, ...custom}) => (
        <TextField
            label={label}
            placeholder={label}
            fullWidth={true}
            autoFocus={true}
            
            {...input}
            {...custom}
        />
    )


    return (
        <Dialog
            fullWidth={true}
            open={false}>
            <DialogTitle>Добавить категорию</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <Field name="categoryName"
                           value={'asdasd'}
                           component={renderTextField} label={'Название категории (15 символов)'}
                           type="text"/>
                </DialogContent>
                <DialogActions>
                    <Button type='submit'>
                        save
                    </Button>
                    <Button type='button' onClick={()=>console.log('close')}>
                        close
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

const ModalReduxAdd = reduxForm({form: 'modal-add-category'})(ModalAddRedux);


export default ModalReduxAdd;

