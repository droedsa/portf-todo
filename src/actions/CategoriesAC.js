const changeCategories = (name) => {
    return {
        type: "CHANGE_CATEGORIES",
        payload: name
    }
};

const changeCategoriesSearchPanel = (text) => {
    return {
        type: "SEARCH_CATEGORIES",
        payload: text
    }
};

const initializeCategories = (data) => {
    return {
        type: 'INITIALIZE_CATEGORIES',
        payload: data
    }
}

export {
    changeCategories,
    changeCategoriesSearchPanel,
    initializeCategories
}