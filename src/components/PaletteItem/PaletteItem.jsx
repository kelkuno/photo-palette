import {useSelector} from 'react-redux';
import './PaletteItem.css';



function PaletteItem ({color}) {

    const user = useSelector(store => store.user)
    console.log('this is user', user);
    console.log('this is color', color);


    return (
         
        <div className="palette-container">
            
            {/* color #1 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color.hex0}}
            >
                <p>{color.hex0}</p>
            </div>

            {/* color #2 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color.hex1}}
            >
                <p>{color.hex1}</p>
            </div>

            {/* color #3 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color.hex2}}
            >
                <p>{color.hex2}</p>
            </div>

            {/* color #4 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color.hex3}}
            >
                <p>{color.hex3}</p>
            </div>

            {/* color #5 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color.hex4}}
            >
                <p>{color.hex4}</p>
            </div>

            {/* color #6 */}
            <div 
            className="palette-color"
            style={{backgroundColor: color.hex5}}
            >
                <p>{color.hex5}</p>
            </div>
            
            
        </div>
        
    );
}//end of Palette Item
export default PaletteItem;