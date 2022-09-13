import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { ChromePicker } from 'react-color';
import {useState} from 'react';
import ColorItem from '../ColorItem/ColorItem.jsx';
//fontawesome
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core'


function PaletteDetailDB () {
   const history = useHistory();
   const dispatch = useDispatch();

   const stagedPalette = useSelector(store => store.stagedPalette);
   const [stageColor, setStageColor] = useState('#fff');
   const pic = stagedPalette.img_url;
   const [color1, setColor1] = useState(stagedPalette.hex0);
   const [color2, setColor2] = useState(stagedPalette.hex1);
   const [color3, setColor3] = useState(stagedPalette.hex2);
   const [color4, setColor4] = useState(stagedPalette.hex3);
   const [color5, setColor5] = useState(stagedPalette.hex4);
   const [color6, setColor6] = useState(stagedPalette.hex5);


   const handleColorChange = (color) => {
        setStageColor(color.hex);
        setColor1(stageColor);
  };//end of colorChange

   const handleBack = () => {
      history.push('/palette-list');
      dispatch({
        type: 'CLEAR_STAGED_PALETTE'
      })
   };//end of handleBack

   const handleEdit = () => {
        console.log('edit clicked');
        setMask(!mask);
   } // end of handleEdit

//    const testFunction = () =>{
//         setStageColor(color1);

//    };

   const handleDelete = () => {
      console.log('delete clicked!');
      dispatch({type:'DELETE_PALETTE',
         payload: {id: stagedPalette.id}});
      history.push('/palette-list');
   };//end of handleDelete

   const handleSave = () => {
      console.log('clicked');
  
      dispatch({
        type: 'UPDATE_COLORS',
        payload: {hex0: color1, id: stagedPalette.id}
      })
      history.push('/palette-list');

   };//end of handleEdit

   console.log('this is stagedPalette reducer', stagedPalette);
   console.log('this is stageColor', stageColor);
   console.log('color 1', color1);
//    console.log('this is mask:', mask);


   return(
    <>
      <h2>this is palette detail DB</h2>
      <img src={pic} className="user-pic" />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleSave}>Save</button>
      
      <div className="container">
            <ColorItem 
            color={color1}
            className="palette-color"
            stageColor={stageColor}
            handleColorChange={handleColorChange}
            onClick={()=>{setStageColor(color1);}}
            />
            <ColorItem 
            color={color2}
            className="palette-color"
            stageColor={stageColor}
            handleColorChange={handleColorChange}
            onClick={()=>{setStageColor(color2);}}
            />
      
               {/* color #1 */}
            {/* <div 
            className="palette-color"
            style={{backgroundColor: color1}}
            onClick={()=>{setStageColor(color1);}}
            > */}
                {/* <p>{color1}</p>
                <FontAwesomeIcon 
                icon={faPenToSquare}
                onClick={handleEdit}
                /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
{/*                 
            </div> */}

            {/* color #2 */}
            {/* <div 
            className="palette-color"
            style={{backgroundColor: color2}}
            onClick={()=>{setStageColor(color2);}}
            >
                <p>{color2}</p>
            </div> */}

            {/* color #3 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color3}}
            onClick={()=>{setStageColor(color3);}}

            >
                <p>{color3}</p>
            </div>

            {/* color #4 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color4}}
            onClick={()=>{setStageColor(color4);}}

            >
                <p>{color4}</p>
            </div>

            {/* color #5 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color5}}
            onClick={()=>{setStageColor(color5);}}

            >
                <p>{color5}</p>
            </div>

            {/* color #6 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color6}}
            onClick={()=>{setStageColor(color6);}}

            >
                <p>{color6}</p>
            </div>
      </div> 
      
      
      
    </>
    
   )

}//end of PaletteDetailDB

export default PaletteDetailDB;