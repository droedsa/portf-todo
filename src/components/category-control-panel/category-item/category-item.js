import React from 'react';
import Paper from "@material-ui/core/Paper";

const CategoryItem = ({customCategories,tasks,selected,changeCategories,openModalChangeCategories,searchText}) => {
    return customCategories.map(({id, name}) => {
        const countTask = tasks.filter(task => task.categories === name).length;

         return name.includes(searchText)? <Paper elevation={4} key={id}
                      style={{
                          backgroundColor: name === selected ? '#512da8' : null,
                          color: name === selected ? "white" : "black",
                          marginBottom:10
                      }}>
            <div  className="categories-item">
                <div onClick={() => changeCategories(name)} className="task-item-title">
                    <h4 className='task-title'>{name}</h4>
                </div>
                <div className="number-container">
                    <i onClick={() => openModalChangeCategories(id)} className="fas fa-pencil-alt pen-block"/>
                    <p className='categories-title-number'>{countTask}</p>
                </div>

            </div>

        </Paper>:null;
    });
};

export default CategoryItem;