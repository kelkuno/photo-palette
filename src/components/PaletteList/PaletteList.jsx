import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import PaletteForm from '../PaletteForm/PaletteForm';
import PaletteItem from '../PaletteItem/PaletteItem';
import './PaletteList.css';




function PaletteList () {

    const user = useSelector(store => store.user)
    const palette = useSelector(store => store.palette)
    const stagedPalette = useSelector(store => store.stagedPalette);

    const dispatch = useDispatch();
    const history = useHistory();



    useEffect(()=>{
        dispatch({type: 'FETCH_PALETTES'})
    }, []);

    const handleNewPalette = () => {
        dispatch({type:'PREPARE_FORM'});
        history.push('/palette-form')
    }//end of handleNew Palette
   

   

    return (
        <>
        <div className="container">
            <button 
            onClick={handleNewPalette}
            className="btn"
            >
                Generate Palette
            </button>
        </div>
        

        <div className="palette-list-container">
            {palette.map(color =>{
            
                return (
                    
                        <PaletteItem 
                        key={color.id}
                        color={color}
                        />
            
                );
            })}
        </div>
        
        </>
    );

} //end of PaletteList
export default PaletteList;