const newPaletteReducer = (state = {palette_name:'', 
    user_id:'', img_url:'', hex0:'', 
    hex1:'', hex2:'',hex3:'',
    hex4:'',hex5:'', quantity0: 16.66, quantity1: 16.66,
    quantity2: 16.66, quantity3: 16.66, quantity4: 16.66,
    quantity5: 16.66 }, action) => {

    switch (action.type) {
      case 'SET_NAME_PIC':
        return {...state, palette_name: action.payload.name, img_url: action.payload.pic};
        case 'STAGE_COLORS':
          return {...state, hex0: action.payload.hex0, hex1: action.payload.hex1,
            hex2: action.payload.hex2, hex3: action.payload.hex3,
            hex4: action.payload.hex4, hex5: action.payload.hex5};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default newPaletteReducer;
  