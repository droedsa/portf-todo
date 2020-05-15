import React from "react";
import './sort-panel.css'

const SortPanel = () => {
    return <div className="sort-panel d-flex">
        <input className='form-control' type="text" placeholder='Поиск в текущей категории'/>

        <select className='form-control'>
            <option>Все статусы</option>
            <option>Завершенные задачи</option>
            <option>Незавершонные задачи</option>
        </select>

        <select className='form-control'>
            <option>Все приоритеты</option>
            <option>Низкий</option>
            <option>Средний</option>
            <option>Высокий</option>
            <option>Очень высокий</option>
        </select>

        <button className='btn form-control'>Сбросить фильтры</button>
        <button className='btn btn-primary form-control'>Добавить</button>
    </div>
};

export default SortPanel;