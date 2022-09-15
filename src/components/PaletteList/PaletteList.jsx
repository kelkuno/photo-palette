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

    // console.log('user', user);
    // console.log('palette', palette);
    // console.log('stagedPalette', stagedPalette);


    const handleNewPalette = () => {
        dispatch({type:'PREPARE_FORM'});
        history.push('/palette-form')
    }//end of handleNew Palette

    const handleInfo = () => {
        history.push('/info-page');
    }

   

   

    return (
        <>
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
        <button onClick={handleNewPalette}>Generate Palette</button>
        <button onClick={handleInfo}>Info</button>
        </>
    );

} //end of PaletteList
export default PaletteList;