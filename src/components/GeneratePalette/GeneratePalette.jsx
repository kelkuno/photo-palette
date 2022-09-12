import {ColorExtractor} from 'react-color-extractor';
import {useState, useEffect} from 'react';
import  {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './GeneratePalette.css';

function PaletteDetail () {

    const stagedPalette = useSelector(store => store.stagedPalette);
    const [colors, setColors] = useState([]);
    const [pic, setPic] = useState(stagedPalette.img_url);

    const dispatch = useDispatch();
    const history = useHistory();

   

    const getColors = (colors) => {
        setColors (colors);
        dispatch({
            type:'STAGE_COLORS',
            payload: {hex0: colors[0], hex1: colors[1],
                hex2: colors[2], hex3: colors[3],
                hex4: colors[4], hex5: colors[5],}
        })
       
      }
    
    const handleSave = () => {
        console.log('handleSave');
        dispatch({type: 'ADD_PALETTE',
        payload: {stagedPalette: stagedPalette}
        });
        history.push('/palette-list');
    }

    const handleBack = () => {
        history.push('/palette-list');
    }//end of handleBack
    
    console.log(stagedPalette);
    console.log('this is colors', colors);
    console.log(pic);

    return (
        <>
            <ColorExtractor
            getColors={getColors} 
            maxColors={256}
            >
                <img src={pic} alt="user-Upload" />
            
            </ColorExtractor>
            <div className="container">
            {colors.map((color, id) => (
                <div
                key={id}
                className="color-box"
                style={{backgroundColor: color}}
                >
                {color}
                </div>
            ))}
            </div> 
            <button onClick={handleBack}>Back</button>
            <button>Delete</button>
            <button>Edit</button>
            <button onClick={handleSave}>Save Palette</button>



        </>
    );

}//end of PaletteDetail
export default PaletteDetail;