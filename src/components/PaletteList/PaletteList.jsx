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

    console.log('user', user);
    console.log('palette', palette);
    console.log('stagedPalette', stagedPalette);


    const handleNewPalette = () => {
        dispatch({type:'PREPARE_FORM'});
        history.push('/palette-form')
    }//end of handleNew Palette

   

    return (
        <>
            {palette.map(color =>{
            
                return (
                    
                        <PaletteItem 
                        className="palette-list-container"
                        key={color.id}
                        color={color}
                        />
                    
                    
                );
            })}
            <button onClick={handleNewPalette}>Generate Palette</button>
        
            

        
        </>
    );

} //end of PaletteList
export default PaletteList;