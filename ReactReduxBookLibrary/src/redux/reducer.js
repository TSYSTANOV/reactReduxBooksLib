import * as actionTypes from "./actionTypes";
const initialState = [];
function reducerBook(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];

    case actionTypes.DELETE_BOOK:
      const currentState = state.filter((item) => {
        return item.id !== action.payload;
      });
      return currentState;

    case actionTypes.TOGGLE_BOOK:
      return state.map((item)=>{
        if(item.id === action.payload){
          return {
            ...item,
            favorite: !item.favorite
          }
        }
          return item      
      });
    
    default:
      return state;
  }
}
export default reducerBook;
