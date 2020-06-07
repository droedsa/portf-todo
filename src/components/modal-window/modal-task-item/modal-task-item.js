import React from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import {Field} from "redux-form";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import {maxLengthCreator, required} from "../formValidate";
import FormHelperText from "@material-ui/core/FormHelperText";

const renderField = ({input, meta, ...custom}) => {
    return <FormControl style={{marginBottom:20}} fullWidth>
        <TextField
            error={meta.touched && meta.error !== undefined}
            helperText={meta.touched ? meta.error : null}
            label='Имя категории'
            {...input} {...custom}/>
    </FormControl>
}

const renderSelectFieldPriority = ({
                                       input,
                                       label,
                                       meta: {touched, error},
                                       children,
                                       ...custom
                                   }) => (
    <FormControl style={{marginBottom:20}} fullWidth  error={touched && error !== undefined}>
        <InputLabel htmlFor="priority-native-simple">Приоритет</InputLabel>
        <Select

            {...input}
            {...custom}
            inputProps={{
                name: 'Все',
                id: 'priority-native-simple'
            }}
        >
            {children}
        </Select>
        <FormHelperText>{touched ? error : null}</FormHelperText>
    </FormControl>
)

const renderSelectFieldCategory = ({
                                       input,
                                       label,
                                       meta: {touched, error},
                                       children,
                                       ...custom
                                   }) => (
    <FormControl style={{marginBottom:20}} fullWidth  error={touched && error !== undefined}>
        <InputLabel htmlFor="category-native-simple">Категория</InputLabel>
        <Select
            {...input}
            {...custom}
            inputProps={{
                id: 'category-native-simple'
            }}
        >
            {children}
        </Select>
        <FormHelperText>{touched ? error : null}</FormHelperText>
    </FormControl>
)

let maxLength = maxLengthCreator(150);

const ModalTaskItem = ({handleSubmit, priorities, categories, modalClose}) => {
    return (
        <form onSubmit={handleSubmit}>
            <DialogContent>
                <FormControl  fullWidth>
                    <Field  name='name' component={renderField} type='text' validate={[maxLength, required]}/>
                </FormControl>
                <Field
                    name="priority"
                    component={renderSelectFieldPriority}
                    validate={[required]}
                >
                    <MenuItem selected/>
                    {
                        priorities.map(item => (
                            <MenuItem key={item.id}
                                      value={item.priority}>
                                {item.priority}
                            </MenuItem>
                        ))
                    }
                </Field>

                <Field
                    name="categories"
                    component={renderSelectFieldCategory}
                    validate={[required]}
                >
                    <MenuItem selected value="Все">Все</MenuItem>
                    {
                        categories.map(item => (
                            <MenuItem key={item.id}
                                      value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))
                    }
                </Field>

            </DialogContent>
            <DialogActions>
                <Button type='submit' color="secondary" variant='contained'>
                    Сохранить
                </Button>
                <Button type='button' onClick={() => modalClose()} color="primary" variant='contained'>
                    Закрыть
                </Button>
            </DialogActions>
        </form>
    );
};

export default ModalTaskItem;