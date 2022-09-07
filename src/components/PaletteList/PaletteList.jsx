import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import PaletteForm from '../PaletteForm/PaletteForm';
import PaletteItem from '../PaletteItem/PaletteItem';
import PaletteDetail from '../PaletteDetail/PaletteDetail';
import paletteSaga from '../../redux/sagas/palette.saga';




function PaletteList () {

    const user = useSelector(store => store.user)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type: 'FETCH_PALETTES'})
    }, []);

    console.log(user);

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