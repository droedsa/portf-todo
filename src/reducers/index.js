import {initialState} from "./initialState";

const reducer = (state = initialState, action) => {

    switch (action.type) {
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

        // Modal Change Categories

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

        default :
            return state;
    }

    // return{
    //     bord:updateBord(state,action),
    //     categories: updateCategories(state,action)
    // }
};

export default reducer;