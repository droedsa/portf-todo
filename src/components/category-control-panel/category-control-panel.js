import React from "react";
import './category-control-panel.css'
import {connect} from "react-redux";
import ModalAddCategories from "../modal-window/modal-add-categories/modal-add-categories";
import {modalAddCategoriesOpenModal} from "../../actions";
import ModalChangeCategories from "../modal-window/modal-change-categories/modal-change-categories";
import {modalChangeCategoriesOpen} from "../../actions/modalAC";
import {changeCategoriesClick, changeCategoriesSearchPanel} from "../../actions/CategoriesAC";

const CategoryControlPanel = ({
                                  selected, allTasK, customCategories,
                                  openModalAddCategories, openModalChangeCategories,
                                  changeCategories, searchText, changeSearchInput, show
                              }) => {

    console.log(customCategories)
    const customCat = customCategories.map(item => {
        if (item.name.includes(searchText)) {
            return <div key={item.id}
                        className={`сustom-categories categories-tasks ${item.name === selected ? 'selected' : null}`}>
                <div className="task align-items-center ">
                    <h4 onClick={() => changeCategories(item.name)} className='task-title'>{item.name}</h4>
                </div>
                <button className='btn pen-block'>
                    <i onClick={() => openModalChangeCategories(item.id)} className="fas fa-pencil-alt "/>
                </button>
                <p className='task-number'>{item.count}</p>
            </div>
        } else return null
    });

    const showPanel = show? {display: 'block'}:{display: 'none'};
    return (
        <div className='categories ' style={showPanel}>
            <div className="categories-title  d-flex">
                <h2>Категории</h2>
                <button onClick={openModalAddCategories} className='btn'>
                    <i className="fas fa-plus"/>
                </button>

            </div>
            <div className="border-bottom"/>
            <div className="categories-title-form d-flex justify-content-center">
                <input onChange={event => changeSearchInput(event.target.value)} value={searchText} type="text"
                       className='form-control categories-title-input'
                       placeholder='Поиск категории'/>
            </div>

            <div className={`сustom-categories categories-tasks align-items-center 
            ${'Все' === selected ? 'selected' : null}`}>
                <div className="task  ">
                    <h4 onClick={() => changeCategories('Все')} className='task-title'>Все </h4>
                </div>
                <p className='task-number'>{allTasK}</p>
            </div>

            <div className="border-bottom"/>

            {customCat}

            <ModalAddCategories/>
            <ModalChangeCategories/>
        </div>
    )
};

const mapStateToProps = ({
                             categories: {selected, customCategories, searchText, show},
                             bord: {allTasK}, openModalAddCategories, openModalChangeCategories,
                             changeCategories, changeSearchInput
                         }) => {
    return {
        selected,
        allTasK,
        customCategories,
        openModalAddCategories,
        openModalChangeCategories,
        changeCategories,
        searchText,
        changeSearchInput,
        show
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        openModalAddCategories: () => dispatch(modalAddCategoriesOpenModal()),
        openModalChangeCategories: (id) => dispatch(modalChangeCategoriesOpen(id)),
        changeCategories: (name) => dispatch(changeCategoriesClick(name)),
        changeSearchInput: (text) => dispatch(changeCategoriesSearchPanel(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryControlPanel);