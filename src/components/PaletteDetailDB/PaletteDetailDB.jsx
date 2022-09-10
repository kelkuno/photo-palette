import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function PaletteDetailDB () {
   const history = useHistory();
   const dispatch = useDispatch();

   const stagedPalette = useSelector(store => store.stagedPalette);

   const handleBack = () => {
      history.push('/palette-list');
   }//end of handleBack

   const handleDelete = () => {
      console.log('delete clicked!');
      dispatch({type:'DELETE_PALETTE',
         payload: {id: stagedPalette.id}});
      history.push('/palette-list');
   }//end of handleDelete

   console.log('this is stagedPalette reducer', stagedPalette.id);

   return(
    <>
      <h2>this is palette detail DB</h2>
      <img src="https://media.istockphoto.com/photos/beautiful-sunset-over-the-tropical-sea-picture-id1172427455?b=1&k=20&m=1172427455&s=612x612&w=0&h=5e5ZY9KtcF86MolxsA1j_MgylIMjMJqXcqnOONVypO4=" className="sunset" alt="logo" />
      <div className="container">
      
               {/* color #1 */}
            <div 
            className="palette-color"
            style={{backgroundColor: stagedPalette.hex0}}
            >
                <p>{stagedPalette.hex0}</p>
            </div>

            {/* color #2 */}
            <div 
            className="palette-color"
            style={{backgroundColor: stagedPalette.hex1}}
            >
                <p>{stagedPalette.hex1}</p>
            </div>

            {/* color #3 */}
            <div 
            className="palette-color"
            style={{backgroundColor: stagedPalette.hex2}}
            >
                <p>{stagedPalette.hex2}</p>
            </div>

            {/* color #4 */}
            <div 
            className="palette-color"
            style={{backgroundColor: stagedPalette.hex3}}
            >
                <p>{stagedPalette.hex3}</p>
            </div>

            {/* color #5 */}
            <div 
            className="palette-color"
            style={{backgroundColor: stagedPalette.hex4}}
            >
                <p>{stagedPalette.hex4}</p>
            </div>

            {/* color #6 */}
            <div 
            className="palette-color"
            style={{backgroundColor: stagedPalette.hex5}}
            >
                <p>{stagedPalette.hex5}</p>
            </div>
            
         
      </div> 
      <button onClick={handleBack}>Back</button>
      <button onClick={handleDelete}>Delete</button>
    </>
    
   )

}//end of PaletteDetailDB

export default PaletteDetailDB;