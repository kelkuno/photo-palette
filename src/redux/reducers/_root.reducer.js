import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import palette from './palette.reducer';
import stagedPalette from './stagedPalette.reducer';




// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  palette, //contains palette info from database
  stagedPalette//contains palette info from DB stored in a reducer. 
});

export default rootReducer;
