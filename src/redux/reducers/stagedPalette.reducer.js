const stagedPaletteReducer = (state = {}, action) => {

    switch (action.type) {
      case 'STAGE_PALETTE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default stagedPaletteReducer;
  