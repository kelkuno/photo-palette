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

    return (
        <>
            <div class="detail-img">
                <ColorExtractor
                getColors={getColors} 
                maxColors={256}
                >
                    <img src={pic} alt="user-Upload" />
                
                </ColorExtractor>
            </div>
            <div class="detail-buttons">
                <button onClick={handleBack} className="btn">Back</button>
                <button onClick={handleSave} className="btn">Save Palette</button>
            </div>
            <div className="color-container">
            {colors.map((color, id) => (
                <div
                key={id}
                className="color-boxes"
                style={{backgroundColor: color}}
                >
                {/* {color} */}
                </div>
            ))}
            </div> 
            



        </>
    );

}//end of PaletteDetail
export default PaletteDetail;