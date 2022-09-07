import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import PaletteForm from '../PaletteForm/PaletteForm';
import PaletteItem from '../PaletteItem/PaletteItem';
import PaletteDetail from '../PaletteDetail/PaletteDetail';





function PaletteList () {

    const user = useSelector(store => store.user)
    const palette = useSelector(store => store.palette)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type: 'FETCH_PALETTES'})
    }, []);

    console.log('user', user);
    console.log('palette', palette);

    return (
        <>
            
            <h2>This is palette list component</h2>
            <PaletteForm />
            <PaletteItem />
            <PaletteDetail />

        
        </>
    );

} //end of PaletteList
export default PaletteList;