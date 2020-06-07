const modalAddCategoriesClose = () => {
    return {
        type: 'MODAL_ADD_CATEGORIES_CLOSE'
    }
};
const modalAddCategoriesOpen = () => {
    return {
        type: 'MODAL_ADD_CATEGORIES_OPEN'
    }
};

const modalAddCategoriesSave = (text) => {
    return {
        type: 'MODAL_ADD_CATEGORIES_SAVE',
        payload: text
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

const modalChangeCategoriesSave = (text) => {
    return {
        type: 'MODAL_CHANGE_CATEGORIES_SAVE',
        payload: text
    }
};
const modalCategoriesDelete = () => {
    return {
        type: 'MODAL_CHANGE_CATEGORIES_DELETE'
    }
};

// Modal Settings priority

const modalPrioritySettingsOpen = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_OPEN'
    }
};
const modalPrioritySettingsClose = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CLOSE'
    }
};
const modalPrioritySettingsColorChange = (id, color) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_COLOR_CHANGE',
        color,
        id
    }
};
const modalPrioritySettingsDelete = (id) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_DELETE',
        payload: id
    }
};

// MODAL SETTINGS PRIORITY add new priority
const modalPrioritySettingsNewOpen = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_NEW_OPEN'
    }
};
const modalPrioritySettingsNewClose = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_NEW_CLOSE'
    }
};
const modalPrioritySettingsNewSave = (text) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_NEW_SAVE',
        payload: text
    }
};

// MODAL SETTINGS PRIORITY change priority
const modalPrioritySettingsChangeOpen = (id) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CHANGE_OPEN',
        payload: id
    }
};
const modalPrioritySettingsChangeClose = () => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CHANGE_CLOSE'
    }
};
const modalPrioritySettingsChangeSave = (text) => {
    return {
        type: 'MODAL_PRIORITY_SETTINGS_CHANGE_SAVE',
        payload: text
    }
};


export {
    modalAddCategoriesClose,
    modalAddCategoriesOpen,
    modalAddCategoriesSave,
    modalChangeCategoriesClose,
    modalChangeCategoriesOpen,
    modalChangeCategoriesSave,
    modalCategoriesDelete,
    modalPrioritySettingsDelete,
    modalPrioritySettingsClose,
    modalPrioritySettingsColorChange,
    modalPrioritySettingsOpen,
    modalPrioritySettingsNewClose,
    modalPrioritySettingsNewOpen,
    modalPrioritySettingsNewSave,
    modalPrioritySettingsChangeClose,
    modalPrioritySettingsChangeOpen,
    modalPrioritySettingsChangeSave,
}