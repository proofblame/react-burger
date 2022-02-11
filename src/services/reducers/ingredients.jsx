import { createSlice } from '@reduxjs/toolkit';



export const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  currentTab: 'buns',

  ingredient: {},
  ingredientModal: false,

  cart: [],


  // Неиспользуемые

  currentFrame: 'bun',




  order: {},

  fetchingState: 'none',

};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    // Получение ингредиентов
    getIngredientsRequest(state) {
      state.ingredientsRequest = true
      state.ingredientsFailed = false
    },
    getIngredientsSuccess(state, action) {
      state.ingredients = action.payload
      state.ingredientsRequest = false
    },
    getIngredientsFailed(state) {
      state.ingredientsRequest = false
      state.ingredientsFailed = true
    },
    // Переключение Таба
    swithTab(state, action) {
      state.currentTab = action.payload
    },
    // Получение информации об ингредиенте
    openIngredientModal(state, action) {
      state.ingredientModal = true
      state.ingredient = action.payload
    },
    closeIngredientModal(state) {
      state.ingredient = {}
      state.ingredientModal = false
    },
    // Удаление ингредиента из заказа
    deleteIngredient(state, action) {
      state.cart = state.cart.filter(item => item._id !== action.payload)
    },
    // Добавление ингредиента из заказа
    addIngredient(state, action) {
      state.cart = 
    }



  },
})
const { actions, reducer } = ingredientsSlice;

export const {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
  swithTab,
  openIngredientModal,
  closeIngredientModal,
  deleteIngredient,
} = actions;


export default reducer;