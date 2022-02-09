import { createSlice } from '@reduxjs/toolkit';



export const initialState = {
  ingredients: [],
  itemsRequest: false,
  itemsFailed: false,


  cart: [],
  selectedIngredients: {},
  order: {},

  fetchingState: 'none',
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    getIngredientsRequest(state) {
      state.itemsRequest = true;
      state.itemsFailed = false;
    },
    getIngredientsSuccess(state, action) {
      state.ingredients = action.payload
      state.itemsRequest = false;
    },
    getIngredientsFailed(state) {
      state.itemsRequest = false;
      state.itemsFailed = true;
    }
  },
})
const { actions, reducer } = ingredientsSlice;

export const {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
} = actions;


export default reducer;