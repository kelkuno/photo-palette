import {ColorExtractor} from 'react-color-extractor';
import {useState, useEffect} from 'react';
import  {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './PaletteDetail.css';

function PaletteDetail () {

    const stagedPalette = useSelector(store => store.stagedPalette);
    const [colors, setColors] = useState([]);

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

    return (
        <>
            <ColorExtractor
            getColors={getColors} 
            maxColors={256}
            >
                <img src="https://media.istockphoto.com/photos/beautiful-sunset-over-the-tropical-sea-picture-id1172427455?b=1&k=20&m=1172427455&s=612x612&w=0&h=5e5ZY9KtcF86MolxsA1j_MgylIMjMJqXcqnOONVypO4=" className="sunset" alt="logo" />
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