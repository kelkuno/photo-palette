import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function PaletteForm () {

    //local states
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');


    const dispatch = useDispatch();
    const history = useHistory();

    const handleName = (event) =>{
        setName(event.target.value);
        console.log(name);
    }

    const handlePic = (event) => {
        setPic(event.target.value);
        console.log(pic);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_NAME_PIC',
            payload: {name: name, pic: pic}
        })
        history.push('/palette-detail')
    }//end of handleSubmit

    const handleBack = () => {
        history.push('/palette-list');
     }//end of handleBack

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="new palette name"
                onChange={handleName}
                />
                <input 
                type="text" 
                placeholder="img url"
                onChange={handlePic}
                />
                <button>Generate Palette</button>
            </form>
            <button onClick={handleBack}>Back</button>
        </>
    );
} // end of PaletteForm

export default PaletteForm;