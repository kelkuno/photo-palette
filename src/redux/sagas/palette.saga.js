import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

//worker functions
function* fetchPalettes(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('/api/palettes/', config);
        yield put({type: 'SET_PALETTE', payload: response.data});
    } catch (error) {
        console.log('error w palettes GET', error);
    }
}//end of fetchPalette worker function

function* addPalette(action){
    try {
        yield axios.post('/api/palettes/', action.payload);
        yield put({type: 'FETCH_PALETTES'});
        
    } catch(error){
        console.log('error in the add colors')
    }

}//end of addColors worker function.

//root generator functions
function* paletteSaga() {
    yield takeEvery('FETCH_PALETTES', fetchPalettes);
    yield takeEvery('ADD_PALETTE', addPalette);

}//end of paletteSaga;

export default paletteSaga;