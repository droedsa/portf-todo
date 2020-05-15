import React from "react";
import './board.css'
import SortPanel from "../sort panel/sort-panel";
import StatisticsPanel from "../statistics-panel/statistics-panel";
import TasksTable from "../tasks-table/tasks-table";
import {connect} from "react-redux";
import {showCategoryPanel} from "../../actions/CategoriesAC";

const Board = ({showCP}) => {
    return (
        <div className='container-fluid'>
            <div className="header">
                <button onClick={showCP} className='m-0 p-0 btn'>
                    <i className="fas fa-bars"/>
                </button>

                <h4 className='header-all'>Все</h4>
                <h4 className='header-close'>Скрыть статитику</h4>
            </div>

            <StatisticsPanel/>

            <SortPanel/>

            <TasksTable/>


            <div className="task-bord">

            </div>
        </div>
    )
};

const mapStateToProps = ({showCP}) => {
    return {
        showCP
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showCP: () => dispatch(showCategoryPanel())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);