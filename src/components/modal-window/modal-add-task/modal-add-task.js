import React from "react";
import './modal-add-task.css'
import {connect} from "react-redux";
import {
    modalCreateTaskChangeCategories,
    modalCreateTaskChangePriority,
    modalCreateTaskChangeTerm, modalCreateTaskChangeText, modalCreateTaskClose, modalCreateTaskSave
} from "../../../actions/bord";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";



const ModalAddNewTask = ({
                             customCategories, priorities, onChangeCategories,
                             onChangePriority, onChangeText, btnClose, btnSave, createTask
                         }) => {

    const {show, name} = createTask;

    return <Dialog
        open={show}
        fullWidth={true}
    >
        <DialogTitle>Добавление задачи</DialogTitle>
        <DialogContent>
            <FormControl fullWidth={true}>
                <TextField style={{marginBottom: 30}} value={name}
                           onChange={event => onChangeText(event.target.value)}
                           id="standard-basic" label="Название (10 символов)"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <InputLabel id="categories-label">Категория</InputLabel>
                <Select
                    style={{marginBottom: 30}}
                    labelId="categories-label"
                    defaultValue={'Все'}
                    className='form'
                    onChange={event => onChangeCategories(event.target.value)}
                >
                    <MenuItem value={'Все'}>Все</MenuItem>
                    {
                        customCategories.map(item => <MenuItem style={{width: "auto"}} key={item.id}
                                                               value={item.name}>{item.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth={true}>
                <InputLabel id="priority-label">Приоритет</InputLabel>
                <Select
                    labelId="priority-label"
                    defaultValue={priorities[0].priority}
                    onChange={event => onChangePriority(event.target.value)}
                    id="select-priority"
                >
                    {
                        priorities.map(item => <MenuItem key={item.id}
                                                         value={item.priority}>{item.priority}</MenuItem>)
                    }
                </Select>
            </FormControl>

        </DialogContent>
        <DialogActions>
            <Button onClick={btnSave} color="primary">
                Сохранить
            </Button>
            <Button onClick={btnClose} color="primary" autoFocus>
                Закрыть
            </Button>
        </DialogActions>

    </Dialog>
};

const mapStateToProps = ({
                             categories: {customCategories}, prioritySettings: {priorities},
                             bord: {modal: {createTask}},
                             onChangeCategories, onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave
                         }) => {
    return {
        customCategories, priorities, onChangeCategories, onChangeTerm,
        onChangePriority, onChangeText, btnClose, btnSave, createTask
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCategories: (categories) => dispatch(modalCreateTaskChangeCategories(categories)),
        onChangeTerm: (term) => dispatch(modalCreateTaskChangeTerm(term)),
        onChangePriority: (priority) => dispatch(modalCreateTaskChangePriority(priority)),
        onChangeText: (text) => dispatch(modalCreateTaskChangeText(text)),
        btnClose: () => dispatch(modalCreateTaskClose()),
        btnSave: () => dispatch(modalCreateTaskSave())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalAddNewTask);