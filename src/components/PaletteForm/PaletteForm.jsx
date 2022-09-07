import {useState} from 'react';

function PaletteForm () {

    //local states
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');

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


    }//end of handleSubmit

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
        </>
    );
} // end of PaletteForm

export default PaletteForm;