import React from "react";
import Modal from 'react-modal'
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
import {makeStyles} from "@material-ui/styles";


const ModalAddNewTask = ({
                             customCategories, priorities, onChangeCategories,
                             onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave, createTask
                         }) => {

    const {show, name} = createTask;

    return <div>
        <Dialog
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
                        value={priorities[0].priority}
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


        {/*    <Modal*/}
        {/*    isOpen={show}*/}
        {/*    className="ModalAddNewTask"*/}

        {/*>*/}
        {/*    /!*<div className="modal-header bg-primary">*!/*/}
        {/*    /!*    <h2>Добавление задачи</h2>*!/*/}
        {/*    /!*</div>*!/*/}
        {/*    <div className="modal-body">*/}
        {/*        <p>Название</p>*/}
        {/*        <input onChange={event => onChangeText(event.target.value)} type="text" className='form-control'/>*/}
        {/*        <p>Выберите категорию</p>*/}
        {/*        <select className='form-control' defaultValue={'Все'} onChange={event => onChangeCategories(event.target.value)}>*/}
        {/*            <option  value="Все" >Все</option>*/}
        {/*            {*/}
        {/*                customCategories.map(item => <option  key={item.id}*/}
        {/*                                                     value={item.name}>{item.name}</option>)*/}
        {/*            }*/}
        {/*        </select>*/}
        {/*        <p>Выберите приоритет</p>*/}
        {/*        <select className='form-control' onChange={event => onChangePriority(event.target.value)}>*/}
        {/*            <option></option>*/}
        {/*            {*/}
        {/*                priorities.map(item => <option  key={item.id}*/}
        {/*                                               value={item.priority}>{item.priority}</option>)*/}
        {/*            }*/}
        {/*        </select>*/}
        {/*        /!*<DatePicker*!/*/}
        {/*        /!*    onChange={event => console.log(event)}*!/*/}
        {/*        /!*    value={term}*!/*/}
        {/*        /!*    inputFormat={'MM/DD/YY'}*!/*/}
        {/*        />*/}
        {/*        <div className="btn-group">*/}
        {/*            <button onClick={btnSave} className='btn btn-primary'>*/}
        {/*                Сохранить*/}
        {/*            </button>*/}
        {/*            <button onClick={btnClose} className='btn btn-primary'>*/}
        {/*                Отменить*/}
        {/*            </button>*/}
        {/*        </div>*/}


        {/*    </div>*/}
        {/*</Modal>*/}
    </div>
};

const mapStateToProps = ({
                             categories: {customCategories}, prioritySettings: {priorities},
                             bord: {modal: {createTask}},
                             onChangeCategories, onChangeTerm, onChangePriority, onChangeText, btnClose, btnSave
                         }) => {
    return {
        customCategories,
        priorities,
        onChangeCategories,
        onChangeTerm,
        onChangePriority,
        onChangeText,
        btnClose,
        btnSave,
        createTask
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