import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function PaletteDetailDB () {
   const history = useHistory();

   const stagedPalette = useSelector(store => store.stagedPalette);

   const handleBack = () => {
      history.push('/palette-list');
   }//end of handleBack

   console.log('this is stagedPalette reducer', stagedPalette);

   return(
    <>
      <h2>this is palette detail DB</h2>
      <button onClick={handleBack}>Back</button>
    </>
    
   )

}//end of PaletteDetailDB

export default PaletteDetailDB;