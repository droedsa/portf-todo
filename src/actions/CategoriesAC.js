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

export {
    changeCategories,
    changeCategoriesSearchPanel,
}