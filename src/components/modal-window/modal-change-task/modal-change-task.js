import React from "react";
import './modal-change-task.css'
import {connect} from "react-redux";
import {
    modalChangeTaskChangeCategories,
    modalChangeTaskChangePriority, modalChangeTaskChangeTerm,
    modalChangeTaskChangeText,
    modalChangeTaskClose,
    modalChangeTaskSave,
} from "../../../actions/bord";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";


const ModalChangeTask = ({
                             customCategories, priorities, onChangeCategories,
                             onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave, changeTask
                         }) => {

    const {show, name, categories, priority} = changeTask;

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
                    value={categories}
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
                    id="select-priority"
                    value={priority}
                    onChange={event => onChangePriority(event.target.value)}
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
                             bord: {modal: {changeTask}},
                             onChangeCategories, onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave
                         }) => {
    return {
        customCategories, priorities, onChangeCategories, onChangeTerm,
        onChangePriority, onChangeText, btnClose, btnSave, changeTask
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCategories: (categories) => dispatch(modalChangeTaskChangeCategories(categories)),
        onChangeTerm: (term) => dispatch(modalChangeTaskChangeTerm(term)),
        onChangePriority: (priority) => dispatch(modalChangeTaskChangePriority(priority)),
        onChangeText: (text) => dispatch(modalChangeTaskChangeText(text)),
        btnClose: () => dispatch(modalChangeTaskClose()),
        btnSave: () => dispatch(modalChangeTaskSave())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalChangeTask);