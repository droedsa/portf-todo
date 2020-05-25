import React from "react";
import './task-item.css'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

const TaskItem = ({selectedTask, priorities, openChangeModal, deleteTask, doneBtn}) => {
    return selectedTask.map(({categories, done, id, name, priority}, index) => {
        const color = priorities.find(item => item.priority === priority);
        const colorStyle = typeof color === 'undefined' ? 'white' : color.color;

        const textDoneStyle = {textDecoration: 'line-through'};
        const textDone = done ? textDoneStyle : null;

        return <Paper elevation={4}
                      key={id}
            // style={{borderRadius: 5, marginBottom: 10}}
                      className='task-card'
                      style={{backgroundColor: done ? 'grey' : null}}
        >
            <div className='task-color' style={{backgroundColor: colorStyle}}>
                <div className="task-num">
                    {index + 1}
                </div>
            </div>
            <div className="task-content">
                <div className="task-text" style={textDone}>
                    {name}
                </div>
                <div className='task-info'>
                    <div className="task-category" style={textDone}>
                        {categories}
                    </div>
                    <div className="task-priority" style={textDone}>
                        {priority}
                    </div>
                    <div className="task-action">
                        <Button onClick={() => deleteTask(id)}>
                            <i className="fas fa-trash"/>
                        </Button>

                        <Button onClick={() => openChangeModal(id)}>
                            <i className="fas fa-pencil-alt"/>
                        </Button>

                        <Checkbox
                            className='task-check'
                            checked={done}
                            onChange={() => doneBtn(id)}
                            color='primary'
                        />
                    </div>
                </div>
            </div>
        </Paper>
    })
};

export default TaskItem;