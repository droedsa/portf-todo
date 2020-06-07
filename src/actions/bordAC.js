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

const modalCreateTaskSave = (obj) => {
    return {
        type: 'MODAL_CREATE_TASK_SAVE',
        payload:obj
    }
};

//MODAL CHANGE TASK
const modalChangeTaskOpen = (id) => {
    return {
        type: 'MODAL_CHANGE_TASK_OPEN',
        payload: id
    }
};

const modalChangeTaskClose = () => {
    return {
        type: 'MODAL_CHANGE_TASK_CLOSE'
    }
};

const modalChangeTaskSave = (obj) => {
    return {
        type: 'MODAL_CHANGE_TASK_SAVE',
        payload:obj
    }
};


const modalDeleteTask = (id) => {
    return {
        type: 'BORD_DELETE_TASK',
        payload: id
    }
};


const changeDoneTask = (id) => {
    return {
        type: 'BORD_DONE_TASK',
        payload: id
    }
}

// SORT PANEL
const sortPaneChangelText = (text) => {
    return {
        type: 'BORD_SORT_PANEL_TEXT_CHANGE',
        payload: text
    }
}
const sortPanelChangeStatusTasks = (value) => {
    return {
        type: 'BORD_SORT_PANEL_STATUS_CHANGE',
        payload: value
    }
}
const sortPanelStatusPriority = (value) => {
    return {
        type: 'BORD_SORT_PANEL_PRIORITY_CHANGE',
        payload: value
    }
}


// Component state change when changing category and priority
const changeTaskCategories = (oldText,newText) =>{
    return{
        type:'BORD_CHANGE_CATEGORIES',
        oldText,newText
    }
}
const changeTaskPriority = (oldPriority,newPriority) => {
    return{
        type:'BORD_CHANGE_PRIORITY',
        oldPriority,newPriority
    }
}
const deleteTaskPriority = (oldPriority) => {
    return{
        type:'BORD_DELETE_PRIORITY',
        oldPriority
    }
}
const deleteTaskCategory = (oldCategory) => {
    return{
        type:'BORD_DELETE_CATEGORIES',
        oldCategory
    }
}


export {
    modalCreateTaskClose,
    modalCreateTaskOpen,
    modalCreateTaskSave,
    modalChangeTaskClose,
    modalChangeTaskOpen,
    modalChangeTaskSave,
    modalDeleteTask,
    changeDoneTask,
    sortPanelStatusPriority,
    sortPanelChangeStatusTasks,
    sortPaneChangelText,
    changeTaskCategories,
    changeTaskPriority,
    deleteTaskPriority,
    deleteTaskCategory
}