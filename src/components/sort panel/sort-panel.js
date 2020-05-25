import React from "react";
import './sort-panel.css'
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const SortPanel = ({priorities,onClickAddNewTask}) => {
    return <div className="sort-panel">

        <TextField fullWidth={true} label='Поиск в текущей категории' style={{marginBottom:10}}/>

        <FormControl fullWidth={true}  style={{marginBottom:10}}>
            <InputLabel id="status-label">Статус задач</InputLabel>
            <Select
            labelId='status-label'
            defaultValue='all'
            >
                <MenuItem  value='all'>Все статусы</MenuItem>
                <MenuItem value='done-task'>Завершенные задачи</MenuItem>
                <MenuItem value='open-task'>Незавершонные задачи</MenuItem>
            </Select>
        </FormControl>

        <FormControl fullWidth={true}  style={{marginBottom:10}}>
            <InputLabel id="priority-status-label">Статус приоритетов</InputLabel>
            <Select
                labelId='priority-status-label'
                defaultValue='Все'
            >
                <MenuItem value='Все'>Все приоритеты</MenuItem>
                {
                    priorities.map(({priority,id}) => <MenuItem key={id}>
                            {priority}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
        {/*<Button fullWidth={true} color="secondary">Сбросить фильтры</Button>*/}
        <Button style={{minWidth:100,backgroundColor:'#512da8',color:'#ffff'}}
                variant='contained' onClick={onClickAddNewTask} className='btn btn-primary form-control'>Добавить</Button>
    </div>
};

export default SortPanel;