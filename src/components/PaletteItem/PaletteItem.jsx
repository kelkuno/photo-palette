import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './PaletteItem.css';
import {useState} from 'react';




function PaletteItem ({color}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const [isHovering, setIsHovering] = useState(false);

    const user = useSelector(store => store.user)
    console.log('this is user', user);
    console.log('this is color', color);

    const handlePaletteDetail = () => {
        console.log('handlePalette clicked');
        dispatch({
            type: 'STAGE_PALETTE',
            payload: color
        })
        
        history.push('/palette-detail-db');
    }//end of handlePaletteDetail

    const handleMouseOver = () =>{
        setIsHovering(true);
        console.log('is hover', isHovering);
    }//end of handleMouseOver

    const handleMouseOut = () => {
        setIsHovering(false);
        console.log('is not',  isHovering);
    }//end of handleMouseOut

   


    return (
         
        <div 
        className="palette-container"
        onClick={handlePaletteDetail}
        onMouseEnter={handleMouseOver} 
        onMouseLeave={handleMouseOut}
        >

            {isHovering && (
            <div className="palette-name-hover">
                <h2>{color.palette_name}</h2>    
            </div>
            )}
            <div className="palette-list-pic">
                <img src={color.img_url} />
            </div>

            <div className="colors-container">
            
                {/* color #1 */}
                <div 
                className="palette-color"
                style={{backgroundColor: color.hex0}}
                >
                    {/* <p>{color.hex0}</p> */}
                </div>

                {/* color #2 */}
                <div 
                className="palette-color"
                style={{backgroundColor: color.hex1}}
                >
                    {/* <p>{color.hex1}</p> */}
                </div>

                {/* color #3 */}
                <div 
                className="palette-color"
                style={{backgroundColor: color.hex2}}
                >
                    {/* <p>{color.hex2}</p> */}
                </div>

                {/* color #4 */}
                <div 
                className="palette-color"
                style={{backgroundColor: color.hex3}}
                >
                    {/* <p>{color.hex3}</p> */}
                </div>

                {/* color #5 */}
                <div 
                className="palette-color"
                style={{backgroundColor: color.hex4}}
                >
                    {/* <p>{color.hex4}</p> */}
                </div>

                {/* color #6 */}
                <div 
                className="palette-color"
                style={{backgroundColor: color.hex5}}
                >
                    {/* <p>{color.hex5}</p> */}
                </div>
            </div>
        </div>
        
    );
}//end of Palette Item
export default PaletteItem;