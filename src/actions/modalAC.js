const modalAddCategoriesCloseModal = () => {
    return {
        type: 'MODAL_ADD_CATEGORIES_CLOSE_MODAL'
    }
};
const modalAddCategoriesOpenModal = () => {
    return {
        type: 'MODAL_ADD_CATEGORIES_OPEN_MODAL'
    }
};
const modalAddCategoriesChangeTextModal = (text) => {
    return {
        type: 'MODAL_ADD_CATEGORIES_CHANGE_TEXT_MODAL',
        payload: text
    }
};
const modalAddCategoriesSaveBtnModal = () => {
    return {
        type: 'MODAL_ADD_CATEGORIES_SAVE_BTN_MODAL'
    }
};

// Modal Change Categories
const modalChangeCategoriesClose = () => {
    return {
        type: 'MODAL_CHANGE_CATEGORIES_CLOSE'
    }
};
const modalChangeCategoriesOpen = (id) => {
    return {
        type: 'MODAL_CHANGE_CATEGORIES_OPEN',
        payload: id
    }
};
const modalChangeCategoriesTextChange = (text) => {
    return {
        type: 'MODAL_CHANGE_CATEGORIES_TEXT_CHANGE_',
        payload: text
    }
};
const modalChangeCategoriesSave = () => {
    return {
        type: 'MODAL_CHANGE_CATEGORIES_SAVE'
    }
};
const modalCategoriesDelete = () => {
    return {
        type: 'MODAL_CHANGE_CATEGORIES_DELETE'
    }
};

// Modal Settings priority
const modalSettingsPriorityOpen = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_OPEN'
    }
};
const modalSettingsPriorityClose = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CLOSE'
    }
};
const modalSettingsPriorityColorChange = (id, color) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_COLOR_CHANGE',
        color,
        id
    }
};
const modalSettingsPriorityDelete = (id) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_DELETE',
        payload:id
    }
};

// MODAL SETTINGS PRIORITY add new priority
const modalSettingsPriorityAddNewOpen = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_OPEN'
    }
};
const modalSettingsPriorityAddNewClose = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_CLOSE'
    }
};
const modalSettingsPriorityAddNewChangeText = (text) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_CHANGE_TEXT',
        payload:text
    }
};
const modalSettingsPriorityAddNewSave = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_ADD_NEW_PRIORITY_SAVE'
    }
};

// MODAL SETTINGS PRIORITY change priority
const modalSettingsPriorityChangeOpen = (id) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CHANGE_OPEN',
        payload:id
    }
};
const modalSettingsPriorityChangeClose = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CHANGE_CLOSE'
    }
};
const modalSettingsPriorityChangeText = (text) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CHANGE_TEXT',
        payload:text
    }
};
const modalSettingsPriorityChangeSave = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CHANGE_SAVE',
    }
};



export {
    modalAddCategoriesCloseModal,
    modalAddCategoriesOpenModal,
    modalAddCategoriesChangeTextModal,
    modalAddCategoriesSaveBtnModal,
    modalChangeCategoriesClose,
    modalChangeCategoriesOpen,
    modalChangeCategoriesSave,
    modalChangeCategoriesTextChange,
    modalCategoriesDelete,
    modalSettingsPriorityDelete,
    modalSettingsPriorityClose,
    modalSettingsPriorityColorChange,
    modalSettingsPriorityOpen,
    modalSettingsPriorityAddNewClose,
    modalSettingsPriorityAddNewOpen,
    modalSettingsPriorityAddNewSave,
    modalSettingsPriorityAddNewChangeText,
    modalSettingsPriorityChangeClose,
    modalSettingsPriorityChangeOpen,
    modalSettingsPriorityChangeSave,
    modalSettingsPriorityChangeText
}