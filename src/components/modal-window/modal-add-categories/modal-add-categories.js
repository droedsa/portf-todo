import React from "react";
import Modal from 'react-modal'
import './modal-add-categories.css'
import {connect} from "react-redux";
import {
    modalAddCategoriesChangeTextModal,
    modalAddCategoriesCloseModal,
    modalAddCategoriesSaveBtnModal
} from "../../../actions/modalAC";


const ModalAddCategories = ({modals, modalClose, modalChangeText, modalSaveBtnText}) => {
    const {modalAddCategoriesState: {open, text}} = modals;
    Modal.setAppElement('#root');

    return <div>
        <Modal
            isOpen={open}
            className="Modal"
        >
            <div className="modal-header bg-primary">
                <h5 className="modal-title ">Добавление категории</h5>
                <button onClick={modalClose} className='btn'>
                    <i className="fas fa-times"/>
                </button>
            </div>
            <div className="modal-body">
                <input value={text} onChange={event => modalChangeText(event.target.value)} type="text"
                       className='form-control'/>
                <button onClick={modalSaveBtnText} className='btn btn-primary mt-3'>
                    Сохранить
                </button>
            </div>

        </Modal>

    </div>
};

const mapStateToProps = ({categories: {modals},modalClose,modalChangeText,modalSaveBtnText}) => {
    return {
        modals, modalClose, modalChangeText, modalSaveBtnText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalAddCategoriesCloseModal()),
        modalChangeText: (text) => dispatch(modalAddCategoriesChangeTextModal(text)),
        modalSaveBtnText: () => dispatch(modalAddCategoriesSaveBtnModal()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalAddCategories);