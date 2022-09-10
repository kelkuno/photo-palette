const stagedPaletteReducer = (state = {}, action) => {

    switch (action.type) {
      case 'STAGE_PALETTE':
        return action.payload;
      case 'CLEAR_STAGED_PALETTE':
          return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default stagedPaletteReducer;
  