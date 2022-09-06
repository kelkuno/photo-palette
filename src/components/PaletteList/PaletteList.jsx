import PaletteForm from '../PaletteForm/PaletteForm';
import PaletteItem from '../PaletteItem/PaletteItem';
import PaletteDetail from '../PaletteDetail/PaletteDetail';



function PaletteList () {
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