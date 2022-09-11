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

function* deletePalette(action) {
    try {
        yield axios.delete(`/api/palettes/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_PALETTES'});

    }catch(error){
        console.log('error in delete colors')
    }

}//end of deletePalette worker function. 

function* updateReducer(action) {
    try {
        yield put({type:'UPDATE_COLORS_TO_REDUCER', payload});
    }catch(error){
        console.log('error in delete colors')
    }
}//end of updateReducer worker function. 

function* updatePalette(action) {
    try {
        yield axios.put(`/api/palettes/`, {stagedPalette: action.payload.stagedPalette});
        yield put({type: 'FETCH_PALETTES'});

    }catch(error){
        console.log('error in delete colors')
    }
}//end of updateReducer worker function. 

//root generator functions
function* paletteSaga() {
    yield takeEvery('FETCH_PALETTES', fetchPalettes);
    yield takeEvery('ADD_PALETTE', addPalette);
    yield takeEvery('DELETE_PALETTE', deletePalette);
    yield takeEvery('UPDATE_COLORS_TO_REDUCER', updateReducer);
    yield takeEvery('UPDATE_PALETTE', updatePalette);

}//end of paletteSaga;

export default paletteSaga;