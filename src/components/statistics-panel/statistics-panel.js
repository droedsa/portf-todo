import React from "react";
import './statistics-panel.css'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const StatisticsPanel = ({selectedTask}) => {
    const done = selectedTask.filter(({done}) => done === true)
    const open = selectedTask.filter(({done}) => done === false)
    const percentDone = selectedTask.length === 0 ? 0 : Math.round((done.length * 100) / selectedTask.length);
    const percentOpen = selectedTask.length === 0 ? 0 : Math.round((open.length * 100) / selectedTask.length);
    return (
        <div className='bord-statistic-panel'>

            <div className="bord-statistic-panel-flex-wrap">
                <Paper elevation={3} className='bord-statistic-panel-card'>
                    <div className="card-content">
                        <div className='card-img'>
                            <i className="fas fa-check"/>
                        </div>
                        <Typography variant='h5'>{done.length} из {selectedTask.length}</Typography>
                    </div>

                    <div className="card-footer">
                        <Divider/>
                        <p>Завершенные задачи</p>
                    </div>
                </Paper>

                <Paper elevation={3} className='bord-statistic-panel-card'>
                    <div className="card-content">
                        <div className='card-img'>
                            <i className="fas fa-thumbs-down"/>
                        </div>
                        <Typography variant='h5'>{open.length} из {selectedTask.length}</Typography>
                    </div>

                    <div className="card-footer">
                        <Divider/>
                        <p>Незавершенные задачи</p>
                    </div>
                </Paper>
            </div>

            <div className="bord-statistic-panel-flex-wrap">
                <Paper elevation={3} className='bord-statistic-panel-card'>
                    <div className="card-content">
                        <div className='card-img'>
                            <i className="fas fa-chart-bar"/>
                        </div>
                        <Typography variant='h5'>{percentDone}%</Typography>
                    </div>

                    <div className="card-footer">
                        <Divider/>
                        <p>Процент завершенные задач</p>
                    </div>
                </Paper>

                <Paper elevation={3} className='bord-statistic-panel-card'>
                    <div className="card-content">
                        <div className='card-img'>
                            <i className="fas fa-thumbs-down"/>
                        </div>
                        <Typography variant='h5'>{percentOpen}%</Typography>
                    </div>

                    <div className="card-footer">
                        <Divider/>
                        <p>Процент незавершенные задач</p>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default StatisticsPanel;