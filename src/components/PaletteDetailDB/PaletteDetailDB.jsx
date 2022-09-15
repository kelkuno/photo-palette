import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { ChromePicker } from 'react-color';
import {useState} from 'react';
import ColorItem from '../ColorItem/ColorItem.jsx';


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

    //6 functions that take in the onChange value of color picker 
    //and assign it to respected local color state.
   const handleColorChange1 = (color) => {
        setStageColor(color.hex);
        setColor1(stageColor);
    };//end of colorChange
  const handleColorChange2 = (color) => {
    setStageColor(color.hex);
    setColor2(stageColor);
    };//end of colorChange
  const handleColorChange3 = (color) => {
        setStageColor(color.hex);
        setColor3(stageColor);
    };//end of colorChange
  const handleColorChange4 = (color) => {
        setStageColor(color.hex);
        setColor4(stageColor);
    };//end of colorChange
  const handleColorChange5 = (color) => {
        setStageColor(color.hex);
        setColor5(stageColor);
    };//end of colorChange
  const handleColorChange6 = (color) => {
        setStageColor(color.hex);
        setColor6(stageColor);
    };//end of colorChange

   const handleBack = () => {
      history.push('/palette-list');
      dispatch({
        type: 'CLEAR_STAGED_PALETTE'
      })
   };//end of handleBack

//    const handleEdit = () => {
//         console.log('edit clicked');
//         setMask(!mask);
//    } // end of handleEdit

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
        payload: {hex0: color1, hex1: color2, hex2: color3, hex3: color4, hex4: color5, hex5: color6, id: stagedPalette.id}
      })
      history.push('/palette-list');

   };//end of handleEdit

   console.log('this is stagedPalette reducer', stagedPalette);
   console.log('this is stageColor', stageColor);
   console.log('color 1', color1);
   console.log('color 2', color2);
   console.log('color 3', color3);




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
            handleColorChange={handleColorChange1}
            onClick={()=>{setStageColor(color1);}}
            />
            <ColorItem 
            color={color2}
            className="palette-color"
            stageColor={stageColor}
            handleColorChange={handleColorChange2}
            onClick={()=>{setStageColor(color2);}}
            />
            <ColorItem 
            color={color3}
            className="palette-color"
            stageColor={stageColor}
            handleColorChange={handleColorChange3}
            onClick={()=>{setStageColor(color3);}}
            />
            <ColorItem 
            color={color4}
            className="palette-color"
            stageColor={stageColor}
            handleColorChange={handleColorChange4}
            onClick={()=>{setStageColor(color4);}}
            />
            <ColorItem 
            color={color5}
            className="palette-color"
            stageColor={stageColor}
            handleColorChange={handleColorChange5}
            onClick={()=>{setStageColor(color5);}}
            />
            <ColorItem 
            color={color6}
            className="palette-color"
            stageColor={stageColor}
            handleColorChange={handleColorChange6}
            onClick={()=>{setStageColor(color6);}}
            />
            
      </div> 
      
      
      
    </>
    
   )

}//end of PaletteDetailDB

export default PaletteDetailDB;