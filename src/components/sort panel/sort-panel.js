import React from "react";
import './sort-panel.css'

const SortPanel = ({priorities,onClickAddNewTask}) => {
    return <div className="sort-panel d-flex">
        <input className='form-control' type="text" placeholder='Поиск в текущей категории'/>

        <select className='form-control'>
            <option>Все статусы</option>
            <option>Завершенные задачи</option>
            <option>Незавершонные задачи</option>
        </select>

        <select className='form-control'>
            <option>Все приоритеты</option>
            {
                priorities.map(({priority,id}) => <option key={id}>
                        {priority}
                    </option>
                )
            }
        </select>

        <button className='btn form-control'>Сбросить фильтры</button>
        <button onClick={onClickAddNewTask} className='btn btn-primary form-control'>Добавить</button>
    </div>
};

export default SortPanel;