import React from "react";
import Modal from 'react-modal'
import {connect} from "react-redux";
import {
    modalCategoriesDelete,
    modalChangeCategoriesClose,
    modalChangeCategoriesSave,
    modalChangeCategoriesTextChange
} from "../../../actions/modalAC";
import './modal-change.css'

const ModalChangeCategories = ({modalClose, modalChangeText, modalSaveBtnText, modalChangeCategoriesState,modalDeleteBtn}) => {
    const {open, text} = modalChangeCategoriesState;
    Modal.setAppElement('#root');

    return <div>
        <Modal
            isOpen={open}
            className="ModalChange"
        >
            <div className="modal-header bg-primary">
                <h5 className="modal-title ">Изменение категории</h5>
                <button onClick={modalClose} className='btn'>
                    <i className="fas fa-times"/>
                </button>
            </div>
            <div className="modal-body">
                <input value={text} onChange={event => modalChangeText(event.target.value)} type="text"
                       className='form-control'/>
                <div className="changeBtn d-flex justify-content-around">
                    <button onClick={modalSaveBtnText} className='btn btn-primary mt-2'>
                        Сохранить
                    </button>
                    <button onClick={modalDeleteBtn} className='btn btn-danger mt-2'>
                        Удалить
                    </button>
                </div>

            </div>

        </Modal>

    </div>
};

const mapStateToProps = ({modals: {modalChangeCategoriesState}, modalClose, modalChangeText, modalSaveBtnText, modalDeleteBtn}) => {
    return {modalClose, modalChangeText, modalSaveBtnText, modalChangeCategoriesState, modalDeleteBtn}
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose: () => dispatch(modalChangeCategoriesClose()),
        modalChangeText: (text) => dispatch(modalChangeCategoriesTextChange(text)),
        modalSaveBtnText: () => dispatch(modalChangeCategoriesSave()),
        modalDeleteBtn: () => dispatch(modalCategoriesDelete())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalChangeCategories);