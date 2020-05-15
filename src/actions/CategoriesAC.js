const changeCategoriesClick =(name)=>{
    return{
        type:"CHANGE_CATEGORIES",
        payload:name
    }
};

const changeCategoriesSearchPanel =(text)=>{
    return{
        type:"SEARCH_CATEGORIES",
        payload:text
    }
};

const showCategoryPanel =()=>{
    return{
        type:"SHOW_CATEGORY_PANEL",
    }
};

export {
    changeCategoriesClick,
    changeCategoriesSearchPanel,
    showCategoryPanel
}