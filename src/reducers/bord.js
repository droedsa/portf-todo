import {initialState} from "./initialState/initialState";

const bord = (state = initialState.bord, action) => {
    switch (action.type) {
        case 'MODAL_CREATE_TASK_OPEN': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    createTask: {
                        ...state.modal.createTask,
                        show: true
                    }
                }
            }
        }
        case 'MODAL_CREATE_TASK_CLOSE': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    createTask: {
                        ...state.modal.createTask,
                        show: false
                    }
                }
            }
        }

        case 'MODAL_CREATE_TASK_CHANGE_PRIORITY': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    createTask: {
                        ...state.modal.createTask,
                        priority: action.payload
                    }
                }
            }
        }
        case 'MODAL_CREATE_TASK_CHANGE_CATEGORIES': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    createTask: {
                        ...state.modal.createTask,
                        categories: action.payload
                    }
                }
            }
        }

        case 'MODAL_CREATE_TASK_CHANGE_TERM': {

            return {
                ...state,
                modal: {
                    ...state.modal,
                    createTask: {
                        ...state.modal.createTask,
                        term: action.payload
                    }
                }
            }
        }

        case 'MODAL_CREATE_TASK_CHANGE_TEXT': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    createTask: {
                        ...state.modal.createTask,
                        name: action.payload
                    }
                }
            }
        }

        case 'MODAL_CREATE_TASK_SAVE': {
            const newItem = {
                id: state.modal.createTask.id + 1,
                name: state.modal.createTask.name,
                term: state.modal.createTask.term,
                categories: state.modal.createTask.categories,
                priority: state.modal.createTask.priority,
                done: false
            };
            console.log(newItem);
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    newItem
                ],
                modal: {
                    ...state.modal,
                    createTask: {
                        show: false,
                        id: state.modal.createTask.id + 1,
                        name: '',
                        term: '',
                        priority: '',
                        categories: 'Все'
                    }
                }
            }
        }

        //MODAL CHANGE
        case 'MODAL_CHANGE_TASK_OPEN': {
            const Item = state.tasks.find(({id}) => id === action.payload);
            return {
                ...state,
                modal: {
                    ...state.modal,
                    changeTask: {
                        id: Item.id,
                        show: true,
                        name: Item.name,
                        priority: Item.priority,
                        categories: Item.categories,
                        term: Item.term
                    }
                }
            }
        }

        case 'MODAL_CHANGE_TASK_CLOSE': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    changeTask: {
                        ...state.modal.changeTask,
                        show: false
                    }
                }
            }
        }

        case 'MODAL_CHANGE_TASK_CHANGE_TEXT': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    changeTask: {
                        ...state.modal.changeTask,
                        name: action.payload
                    }
                }
            }
        }

        case 'MODAL_CHANGE_TASK_CHANGE_PRIORITY': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    changeTask: {
                        ...state.modal.changeTask,
                        priority: action.payload
                    }
                }
            }
        }

        case 'MODAL_CHANGE_TASK_CHANGE_CATEGORIES': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    changeTask: {
                        ...state.modal.changeTask,
                        categories: action.payload
                    }
                }
            }
        }

        case 'MODAL_CHANGE_TASK_CHANGE_TERM': {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    changeTask: {
                        ...state.modal.changeTask,
                        term: action.payload
                    }
                }
            }
        }

        case 'MODAL_CHANGE_TASK_SAVE': {
            const Item = state.tasks.find(({id}) => id === state.modal.changeTask.id);
            const idx = state.tasks.findIndex(({id}) => id === Item.id);
            const newItem = {
                id: Item.id,
                name: state.modal.changeTask.name,
                categories: state.modal.changeTask.categories,
                priority: state.modal.changeTask.priority,
                term: state.modal.changeTask.term,
                done: Item.done
            };
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, idx),
                    newItem,
                    ...state.tasks.slice(idx + 1)
                ],
                modal: {
                    ...state.modal,
                    changeTask: {
                        ...state.modal.changeTask,
                        show: false
                    }
                }
            }
        }

        case 'BORD_DELETE_TASK': {
            const Item = state.tasks.find(({id}) => id === action.payload);
            const idx = state.tasks.findIndex(({id}) => id === Item.id);
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, idx),
                    ...state.tasks.slice(idx + 1)
                ]
            }
        }

        case 'BORD_DONE_TASK': {
            const Item = state.tasks.find(({id}) => id === action.payload);
            const idx = state.tasks.findIndex(({id}) => id === Item.id);
            const newItem = {
                ...Item,
                done: !Item.done
            };
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, idx),
                    newItem,
                    ...state.tasks.slice(idx + 1)
                ]
            }
        }
            //SORT PANEL
        case 'BORD_TEXT_CHANGE':{
            return{
                ...state,
                sortPanel: {
                    ...state.sortPanel,
                    text: action.payload
                }
            }
        }
        case 'BORD_STATUS_TASKS_CHANGE':{
            return{
                ...state,
                sortPanel: {
                    ...state.sortPanel,
                    statusTasks: action.payload
                }
            }
        }
        case 'BORD_STATUS_PRIORITY_CHANGE':{
            return{
                ...state,
                sortPanel: {
                    ...state.sortPanel,
                    statusPriority: action.payload
                }
            }
        }

        default:
            return state;
    }
};

export default bord;