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
        payload:id
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

const modalCategoriesDelete =()=>{
    return{
        type:'MODAL_CHANGE_CATEGORIES_DELETE'
    }
}


export {
    modalAddCategoriesCloseModal,
    modalAddCategoriesOpenModal,
    modalAddCategoriesChangeTextModal,
    modalAddCategoriesSaveBtnModal,
    modalChangeCategoriesClose,
    modalChangeCategoriesOpen,
    modalChangeCategoriesSave,
    modalChangeCategoriesTextChange,
    modalCategoriesDelete
}