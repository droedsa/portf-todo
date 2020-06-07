import {initialState} from "./initialState/initialState";

const prioritySettings = (state = initialState.prioritySettings, action) => {
    switch (action.type) {
        case 'MODAL_PRIORITY_SETTINGS_OPEN': {
            return {
                ...state,
                show: true
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_CLOSE': {
            return {
                ...state,
                show: false
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_COLOR_CHANGE': {
            const Item = state.priorities.find(({id}) => id === action.id);
            const idx = state.priorities.findIndex(({id}) => id === Item.id);
            const newItem = {
                ...Item,
                color: action.color
            };
            return {
                ...state,
                priorities: [
                    ...state.priorities.slice(0, idx),
                    newItem,
                    ...state.priorities.slice(idx + 1)
                ]
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_DELETE': {
            const idx = state.priorities.findIndex(({id}) => id === action.payload);
            return {
                ...state,
                priorities: [
                    ...state.priorities.slice(0, idx),
                    ...state.priorities.slice(idx + 1)
                ]
            }
        }

        // MODAL SETTINGS PRIORITY add new priority \\ISOLATED
        case 'MODAL_PRIORITY_SETTINGS_NEW_OPEN': {
            return {
                ...state,
                addNewPriority: {
                    ...state.addNewPriority,
                    show: true
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_NEW_CLOSE': {

            return {
                ...state,
                addNewPriority: {
                    ...state.addNewPriority,
                    show: false,
                    priority: ''
                }
            }
        }

        case 'MODAL_PRIORITY_SETTINGS_NEW_SAVE': {
            return {
                ...state,
                priorities: [
                    ...state.priorities,
                    {
                        id: state.addNewPriority.id + 1,
                        priority: action.payload,
                        color: '#a6d4fa',
                    }
                ],
                addNewPriority: {
                    id: state.addNewPriority.id + 1,
                    text: '',
                    show: false
                }
            }
        }

        // MODAL SETTINGS PRIORITY change priority \\ISOLATED
        case 'MODAL_PRIORITY_SETTINGS_CHANGE_OPEN': {
            const Item = state.priorities.find(({id}) => id === action.payload);
            return {
                ...state,
                changePriorityText: {
                    show: true,
                    text: Item.priority,
                    id: action.payload
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_CHANGE_CLOSE': {
            return {
                ...state,
                changePriorityText: {
                    show: false,
                    text: '',
                    id: null
                }
            }
        }

        case 'MODAL_PRIORITY_SETTINGS_CHANGE_SAVE': {
            const Item = state.priorities.find(({id}) =>
                id === state.changePriorityText.id);
            const idx = state.priorities.findIndex(({id}) => id === Item.id);
            const newItem = {
                ...Item,
                priority: action.payload
            };
            return {
                ...state,
                priorities: [
                    ...state.priorities.slice(0, idx),
                    newItem,
                    ...state.priorities.slice(idx + 1)
                ],
                changePriorityText: {
                    show: false,
                    id: null
                }
            }
        }

        default:
            return state
    }
};

export default prioritySettings;