import {SketchPicker} from "react-color";
import React, {useState} from "react";
import './colorPicker.css'

const ColorPicker = ({priority, id, changeColor, color, deletePriority, openChangeMenu}) => {

    const [showCP, setShowCP] = useState(false);

    return <React.Fragment>
        <h4>{priority}</h4>
        <div className='event-panel'>
            <div className='picker'>
                <div className='swatch' onClick={() => setShowCP(showCP => !showCP)}>
                    <div style={{backgroundColor: color}} className='color'/>
                </div>
                {
                    showCP ? <div className='popover'>
                        <div className="cover" onClick={() => setShowCP(false)}/>
                        <SketchPicker color={color} onChange={event => changeColor(id, event.hex)}/>
                    </div> : null
                }
            </div>
            <button onClick={() => deletePriority(id)} className='btn'>
                <i className="far fa-trash-alt"/>
            </button>

            <button onClick={() => openChangeMenu(id)} className='btn'>
                <i className="fas fa-pen"/>
            </button>
        </div>
    </React.Fragment>
};

export default ColorPicker;