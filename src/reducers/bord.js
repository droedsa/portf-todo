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

        case 'MODAL_CREATE_TASK_SAVE': {
            const newItem = {
                id: state.modal.createTask.id + 1,
                name: action.payload.name,
                term: state.modal.createTask.term,
                categories: action.payload.categories,
                priority: action.payload.priority,
                done: false
            };
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

        case 'MODAL_CHANGE_TASK_SAVE': {
            const Item = state.tasks.find(({id}) => id === state.modal.changeTask.id);
            const idx = state.tasks.findIndex(({id}) => id === Item.id);
            const newItem = {
                id: Item.id,
                name: action.payload.name,
                categories: action.payload.categories,
                priority: action.payload.priority,
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
        case 'BORD_SORT_PANEL_TEXT_CHANGE': {
            return {
                ...state,
                sortPanel: {
                    ...state.sortPanel,
                    text: action.payload
                }
            }
        }
        case 'BORD_SORT_PANEL_STATUS_CHANGE': {
            return {
                ...state,
                sortPanel: {
                    ...state.sortPanel,
                    statusTasks: action.payload
                }
            }
        }
        case 'BORD_SORT_PANEL_PRIORITY_CHANGE': {
            return {
                ...state,
                sortPanel: {
                    ...state.sortPanel,
                    statusPriority: action.payload
                }
            }
        }

        //Component state change when changing category and priority

        case 'BORD_CHANGE_CATEGORIES': {
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.categories === action.oldText) {
                        console.log(action.newText)
                        return {
                            ...item,
                            categories: action.newText
                        }
                    } else return {
                        ...item
                    }
                })
            }
        }

        case 'BORD_DELETE_CATEGORIES': {
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.categories === action.oldCategory) {
                        return {
                            ...item,
                            categories: 'Все'
                        }
                    } else return {
                        ...item
                    }
                })
            }
        }

        case 'BORD_CHANGE_PRIORITY': {
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.priority === action.oldPriority) {
                        return {
                            ...item,
                            priority: action.newPriority
                        }
                    } else return {
                        ...item
                    }
                })
            }
        }

        case 'BORD_DELETE_PRIORITY': {
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.priority === action.oldPriority) {
                        return {
                            ...item,
                            priority: ''
                        }
                    } else return {
                        ...item
                    }
                })
            }
        }

        case 'INITIALIZE_TASK':{
            return {
                ...state,
                tasks: action.payload
            }
        }

        default:
            return state;
    }
};

export default bord;