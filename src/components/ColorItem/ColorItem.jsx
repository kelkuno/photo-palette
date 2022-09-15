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
            <div 
            className="color-box"
            style={{backgroundColor: color}}
            >
                <p>{color}</p>
                <FontAwesomeIcon 
                icon={faPenToSquare}
                onClick={handleEdit}
                />  
            </div>
            {!mask && 
            <ChromePicker
            color={stageColor}
            onChange ={handleColorChange}
            disableAlpha={true}
            />
            }
        </>
    );

}//end of  ColorItem

export default ColorItem;