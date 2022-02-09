import { createSlice } from '@reduxjs/toolkit';



export const initialState = {
  ingredients: [],
  itemsRequest: false,
  itemsFailed: false,


  cart: [],
  order: {},

  fetchingState: 'none',

  currentTab: 'buns'
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    // Получение ингредиентов
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
    },
    // Переключение Таба
    swithTab(state, action) {
      state.currentTab = action.payload
    },

  },
})
const { actions, reducer } = ingredientsSlice;

export const {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
  swithTab
} = actions;


export default reducer;