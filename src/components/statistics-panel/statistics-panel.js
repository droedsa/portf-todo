import React from "react";
import './statistics-panel.css'

const StatisticsPanel =() =>{
    return<div className="stat-items ">
        <div className="stat-items-done-task stat-item ">
            <div className='stat-item-cart-info'>
                <div className="stat-items-icon">
                    <i className="fas fa-check"/>
                </div>
                <h4> 5 из 20</h4>
            </div>
            <div className="border"/>
            <p>Завершенные задачи</p>
        </div>

        <div className="stat-items-open-task stat-item">
            <div className='stat-item-cart-info'>
                <div className="stat-items-icon">
                    <i className="fas fa-thumbs-down"/>
                </div>
                <h4> 15 из 20</h4>
            </div>
            <div className="border"/>
            <p>Незавершенные задачи</p>
        </div>

        <div className="stat-items-persent-done-task stat-item ">
            <div className='stat-item-cart-info'>
                <div className="stat-items-icon">
                    <i className="fas fa-chart-bar"/>
                </div>
                <h4> 25%</h4>
            </div>
            <div className="border"/>
            <p>Процент завершенные задач</p>
        </div>

        <div className="stat-items-persent-open-task stat-item">
            <div className='stat-item-cart-info'>
                <div className="stat-items-icon">
                    <i className="fas fa-thumbs-down"/>
                </div>
                <h4> 75% </h4>
            </div>
            <div className="border"/>
            <p>Процент незавершенные задач</p>
        </div>
    </div>
}

export default StatisticsPanel;