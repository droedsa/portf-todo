import {initialState} from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Modal ADD Categories
        case 'MODAL_ADD_CATEGORIES_CLOSE_MODAL':
            return {
                ...state,
                modals: {
                    ...state.modals,
                    modalAddCategoriesState: {
                        ...state.modals.modalAddCategoriesState,
                        open: false,
                    }
                }
            };
        case 'MODAL_ADD_CATEGORIES_OPEN_MODAL':
            return {
                ...state,
                modals: {
                    ...state.modals,
                    modalAddCategoriesState: {
                        ...state.modals.modalAddCategoriesState,
                        open: true
                    }
                }
            };
        case 'MODAL_ADD_CATEGORIES_CHANGE_TEXT_MODAL' :
            return {
                ...state,
                modals: {
                    ...state.modals,
                    modalAddCategoriesState: {
                        text: action.payload,
                        open: true
                    }
                }
            };
        case 'MODAL_ADD_CATEGORIES_SAVE_BTN_MODAL':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    CategoriesId: state.categories.CategoriesId + 1,
                    customCategories: [
                        ...state.categories.customCategories,
                        {
                            id: state.categories.CategoriesId + 1,
                            name: state.modals.modalAddCategoriesState.text,
                            count: 0
                        }
                    ]
                },
                modals: {
                    ...state.modals,
                    modalAddCategoriesState: {
                        open: false,
                        text: ''
                    }
                }
            };

        // Modal CHANGE Categories
        case 'MODAL_CHANGE_CATEGORIES_CLOSE':
            return {
                ...state,
                modals: {
                    ...state.modals,
                    modalChangeCategoriesState: {
                        open: false,
                        text: ''
                    }
                }
            };
        case 'MODAL_CHANGE_CATEGORIES_OPEN':
            const Item = state.categories.customCategories.find(({id}) => action.payload === id);
            return {
                ...state,
                modals: {
                    ...state.modals,
                    modalChangeCategoriesState: {
                        open: true,
                        text: Item.name,
                        id: Item.id
                    }
                }
            };
        case 'MODAL_CHANGE_CATEGORIES_TEXT_CHANGE_':
            return {
                ...state,
                modals: {
                    ...state.modals,
                    modalChangeCategoriesState: {
                        ...state.modals.modalChangeCategoriesState,
                        open: true,
                        text: action.payload
                    }
                }
            };
        case 'MODAL_CHANGE_CATEGORIES_SAVE':
            const catItem = state.categories.customCategories.find(({id}) =>
                state.modals.modalChangeCategoriesState.id === id);
            const itemIndex = state.categories.customCategories.findIndex(({id}) => catItem.id === id);
            const newItem = {
                ...catItem,
                name: state.modals.modalChangeCategoriesState.text
            };
            return {
                ...state,
                categories: {
                    ...state.categories,
                    customCategories: [
                        ...state.categories.customCategories.slice(0, itemIndex),
                        newItem,
                        ...state.categories.customCategories.slice(itemIndex + 1),
                    ]
                },
                modals: {
                    ...state.modals,
                    modalChangeCategoriesState: {
                        ...state.modals.modalChangeCategoriesState,
                        open: false
                    }
                }
            };
        case 'MODAL_CHANGE_CATEGORIES_DELETE': {
            const Item = state.categories.customCategories.find(({id}) =>
                state.modals.modalChangeCategoriesState.id === id);
            const itemIndex = state.categories.customCategories.findIndex(({id}) => Item.id === id);
            return {
                ...state,
                categories: {
                    ...state.categories,
                    customCategories: [
                        ...state.categories.customCategories.slice(0, itemIndex),
                        ...state.categories.customCategories.slice(itemIndex + 1),
                    ]
                },
                modals: {
                    ...state.modals,
                    modalChangeCategoriesState: {
                        ...state.modals.modalChangeCategoriesState,
                        open: false
                    }
                }
            }
        }

        // Categories control panel
        case 'CHANGE_CATEGORIES': {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    selected: action.payload
                }
            }
        }
        case 'SEARCH_CATEGORIES': {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    searchText: action.payload
                }
            }
        }
        case 'SHOW_CATEGORY_PANEL': {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    show: !state.categories.show
                }
            }
        }

        //Modal Priority Settings \\ISOLATED
        case 'MODAL_PRIORITY_SETTINGS_OPEN': {
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    show: true
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_CLOSE': {
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    show: false
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_COLOR_CHANGE': {
            const Item = state.prioritySettings.priorities.find(({id}) => id === action.id);
            const idx = state.prioritySettings.priorities.findIndex(({id}) => id === Item.id);
            const newItem = {
                ...Item,
                color: action.color
            };
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    priorities: [
                        ...state.prioritySettings.priorities.slice(0, idx),
                        newItem,
                        ...state.prioritySettings.priorities.slice(idx + 1)
                    ]
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_DELETE': {
            const idx = state.prioritySettings.priorities.findIndex(({id}) => id === action.payload);
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    priorities: [
                        ...state.prioritySettings.priorities.slice(0, idx),
                        ...state.prioritySettings.priorities.slice(idx + 1)
                    ]
                }
            }
        }

        // MODAL SETTINGS PRIORITY add new priority \\ISOLATED
        case 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_OPEN': {
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    addNewPriority: {
                        ...state.prioritySettings.addNewPriority,
                        show: true
                    }
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_CLOSE': {

            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    addNewPriority: {
                        ...state.prioritySettings.addNewPriority,
                        show: false,
                        priority: ''
                    }
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_CHANGE_TEXT': {
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    addNewPriority: {
                        ...state.prioritySettings.addNewPriority,
                        text: action.payload
                    }
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_SAVE': {
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    priorities: [
                        ...state.prioritySettings.priorities,
                        {
                            id: state.prioritySettings.addNewPriority.id + 1,
                            priority: state.prioritySettings.addNewPriority.text,
                            color: '#ffff'
                        }
                    ],
                    addNewPriority: {
                        id: state.prioritySettings.addNewPriority.id + 1,
                        text: ''
                    }
                }
            }
        }

        // MODAL SETTINGS PRIORITY change priority \\ISOLATED
        case 'MODAL_PRIORITY_SETTINGS_CHANGE_OPEN': {
            const Item = state.prioritySettings.priorities.find(({id}) => id === action.payload);
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    changePriorityText: {
                        show: true,
                        text: Item.priority,
                        id: action.payload
                    }
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_CHANGE_CLOSE': {
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    changePriorityText: {
                        show: false,
                        text: '',
                        id: null
                    }
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_CHANGE_TEXT': {
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    changePriorityText: {
                        ...state.prioritySettings.changePriorityText,
                        show: true,
                        text: action.payload
                    }
                }
            }
        }
        case 'MODAL_PRIORITY_SETTINGS_CHANGE_SAVE': {
            const Item = state.prioritySettings.priorities.find(({id}) =>
                id === state.prioritySettings.changePriorityText.id);
            const idx = state.prioritySettings.priorities.findIndex(({id}) => id === Item.id);
            const newItem = {
                ...Item,
                priority: state.prioritySettings.changePriorityText.text
            };
            return {
                ...state,
                prioritySettings: {
                    ...state.prioritySettings,
                    priorities: [
                        ...state.prioritySettings.priorities.slice(0, idx),
                        newItem,
                        ...state.prioritySettings.priorities.slice(idx + 1)
                    ],
                    changePriorityText: {
                        text: '',
                        show: false,
                        id: null
                    }

                }
            }
        }

        default :
            return state;
    }
};

export default reducer;