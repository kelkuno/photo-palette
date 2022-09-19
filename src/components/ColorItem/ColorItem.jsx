//fontawesome
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { ChromePicker } from 'react-color';
import {useState} from 'react';
import './ColorItem.css';


function ColorItem ({color, handleColorChange, stageColor}) {
   const [mask, setMask] = useState(true);


   const handleEdit = () => {
    console.log('edit clicked');
    setMask(!mask);
} // end of handleEdit

    return (
        <>
            <div className="color-item-wrapper">
                <div 
                className="color-boxes"
                style={{backgroundColor: color}}
                >
                </div>
                <div className="icon">
                    <FontAwesomeIcon 
                    icon={faPenToSquare}
                    onClick={handleEdit}
                    /> 
                      <p>{color}</p> 
                </div>
                <div className="color-picker-wrap">
                    {!mask && 
                    <ChromePicker
                    color={stageColor}
                    onChange ={handleColorChange}
                    disableAlpha={true}
                    className="color-picker"
                    />
                    }
                </div>
            </div>
        </>
    );

}//end of  ColorItem

export default ColorItem;