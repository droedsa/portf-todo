import {SketchPicker} from "react-color";
import React, {useState} from "react";
import './colorPicker.css'
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ColorPicker = ({priority, id, changeColor, color, deletePriority, openChangeMenu}) => {

    const [showCP, setShowCP] = useState(false);
    return <div className='event-panel'>

        <Typography  variant={'h6'}>{priority}</Typography>
        <div>
            <div className='picker'>
                {
                    <Dialog
                        open={showCP}
                        onClose={() => setShowCP(false)}>
                        <SketchPicker color={color} onChange={event => changeColor(id, event.hex)}/>
                    </Dialog>
                }
            </div>
            <ButtonGroup variant="text">
                <Button onClick={() => setShowCP(showCP => !showCP)}>
                    <div style={{backgroundColor: color}} className='color'/>
                </Button>
                <Button onClick={() => deletePriority(priority,id)}>
                    <i className="far fa-trash-alt"/>
                </Button>

                <Button onClick={() => openChangeMenu(id)}>
                    <i className="fas fa-pen"/>
                </Button>
            </ButtonGroup>

        </div>
    </div>
};

export default ColorPicker;