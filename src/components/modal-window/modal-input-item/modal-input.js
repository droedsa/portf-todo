import React from 'react';
import {Field} from "redux-form";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import {maxLengthCreator, required} from "../formValidate";


let maxLength10 = maxLengthCreator(10);
const renderField = ({input, meta, ...custom}) => {
    return <FormControl fullWidth>
        <TextField
            error={meta.touched && meta.error !== undefined}
            helperText={meta.touched ? meta.error : null}
            label='Имя категории'
            {...input} {...custom}/>
    </FormControl>
}

const ModalInput = ({handleSubmit, modalClose, modalDelete = null}) => {
    return (
        <form onSubmit={handleSubmit}>
            <DialogContent>
                <Field name="text" component={renderField} type="text"
                       validate={[maxLength10, required]}/>
            </DialogContent>
            <DialogActions>
                <Button type='submit' variant='contained' color='secondary'> Сохранить </Button>
                <Button onClick={() => modalClose()} type='button' variant='contained'
                        color='primary'> Закрыть </Button>
                {
                    modalDelete !== null ? <Button onClick={() => modalDelete()} type='button' variant='contained'
                                                   color='primary'> Удалить </Button> : null
                }
            </DialogActions>
        </form>
    );
};

export default ModalInput;