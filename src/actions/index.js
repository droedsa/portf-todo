const modalAddCategoriesCloseModal = () =>{
    return{
        type:'MODAL_ADD_CATEGORIES_CLOSE_MODAL'
    }
};

const modalAddCategoriesOpenModal = () =>{
    return{
        type:'MODAL_ADD_CATEGORIES_OPEN_MODAL'
    }
};

const modalAddCategoriesChangeTextModal = (text) =>{
    return{
        type:'MODAL_ADD_CATEGORIES_CHANGE_TEXT_MODAL',
        payload:text
    }
};

const modalAddCategoriesSaveBtnModal = () =>{
    return{
        type:'MODAL_ADD_CATEGORIES_SAVE_BTN_MODAL'
    }
};




export {
    modalAddCategoriesCloseModal,
    modalAddCategoriesOpenModal,
    modalAddCategoriesChangeTextModal,
    modalAddCategoriesSaveBtnModal
}