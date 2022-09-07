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

}//end of worker fetchPalette function

//root generator functions
function* paletteSaga() {
    yield takeEvery('FETCH_PALETTES', fetchPalettes)

}//end of paletteSaga;

export default paletteSaga;