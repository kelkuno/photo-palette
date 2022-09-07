import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import PaletteForm from '../PaletteForm/PaletteForm';
import PaletteItem from '../PaletteItem/PaletteItem';
import PaletteDetail from '../PaletteDetail/PaletteDetail';
import './PaletteList.css';




function PaletteList () {

    const user = useSelector(store => store.user)
    const palette = useSelector(store => store.palette)

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch({type: 'FETCH_PALETTES'})
    }, []);

    console.log('user', user);
    console.log('palette', palette);

    const handleNewPalette = () => {
        history.push('/palette-form')
    }//end of handleNew Palette

    return (
        <>
            {palette.map(color =>{
            
                return (
                    
                    <PaletteItem 
                    key= {color.id}
                    color={color}
                    />
                    
                );
            })}
            <button onClick={handleNewPalette}>Generate Palette</button>
            <PaletteForm />
            
            <PaletteDetail />

        
        </>
    );

} //end of PaletteList
export default PaletteList;