const modalCreateTaskOpen = () => {
    return {
        type: 'MODAL_CREATE_TASK_OPEN'
    }
};

const modalCreateTaskClose = () => {
    return {
        type: 'MODAL_CREATE_TASK_CLOSE'
    }
};

const modalCreateTaskChangePriority = (item) => {
    return {
        type: 'MODAL_CREATE_TASK_CHANGE_PRIORITY',
        payload: item
    }
};

const modalCreateTaskChangeCategories = (item) => {
    return {
        type: 'MODAL_CREATE_TASK_CHANGE_CATEGORIES',
        payload: item
    }
};

const modalCreateTaskChangeTerm = (item) => {
    return {
        type: 'MODAL_CREATE_TASK_CHANGE_TERM',
        payload: item
    }
};

const modalCreateTaskChangeText = (text) => {
    return {
        type: 'MODAL_CREATE_TASK_CHANGE_TEXT',
        payload: text
    }
};

const modalCreateTaskSave = () => {
    return {
        type: 'MODAL_CREATE_TASK_SAVE'
    }
};

//MODAL CHANGE TASK

const modalChangeTaskOpen = (id) => {
    return {
        type: 'MODAL_CHANGE_TASK_OPEN',
        payload:id
    }
};

const modalChangeTaskClose = () => {
    return {
        type: 'MODAL_CHANGE_TASK_CLOSE'
    }
};

const modalChangeTaskChangeText = (text) => {
    return {
        type: 'MODAL_CHANGE_TASK_CHANGE_TEXT',
        payload:text
    }
};

const modalChangeTaskChangePriority = (value) => {
    return {
        type: 'MODAL_CHANGE_TASK_CHANGE_PRIORITY',
        payload:value
    }
};

const modalChangeTaskChangeCategories = (value) => {
    return {
        type: 'MODAL_CHANGE_TASK_CHANGE_CATEGORIES',
        payload:value
    }
};

const modalChangeTaskChangeTerm = (value) => {
    return {
        type: 'MODAL_CHANGE_TASK_CHANGE_TERM',
        payload:value
    }
};

const modalChangeTaskSave = () => {
    return {
        type: 'MODAL_CHANGE_TASK_SAVE'
    }
};


const modalDeleteTask=(id)=>{
    return{
        type:'BORD_DELETE_TASK',
        payload:id
    }
};


const changeDoneState=(id)=>{
    return{
        type:'BORD_DONE_TASK',
        payload:id
    }
}


export {
    modalCreateTaskChangeCategories,
    modalCreateTaskChangePriority,
    modalCreateTaskChangeTerm,
    modalCreateTaskChangeText,
    modalCreateTaskClose,
    modalCreateTaskOpen,
    modalCreateTaskSave,
    modalChangeTaskChangeCategories,
    modalChangeTaskChangePriority,
    modalChangeTaskChangeTerm,
    modalChangeTaskChangeText,
    modalChangeTaskClose,
    modalChangeTaskOpen,
    modalChangeTaskSave,
    modalDeleteTask,
    changeDoneState
}