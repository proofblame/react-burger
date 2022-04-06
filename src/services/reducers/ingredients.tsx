import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getIngredients, sendOrder } from '../actions/ingredients';
import { TIngredientState, TIngredient, TOrder } from '../types/ingredients'

export const initialState: TIngredientState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  currentTab: 'buns',

  ingredient: null,
  ingredientModal: false,

  cart: [],

  order: null,
  orderModal: false,
  orderRequest: false,
  orderFailed: false,

  loader: false,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    // Переключение Таба
    swithTab(state, action: PayloadAction<string>) {
      state.currentTab = action.payload
    },
    // Получение информации об ингредиенте
    openIngredientModal(state, action: PayloadAction<TIngredient>) {
      state.ingredientModal = true
      state.ingredient = action.payload
    },
    // Удаление ингредиента из заказа
    deleteIngredient(state, action: PayloadAction<string>) {
      const index = state.cart.findIndex(item => item.uid === action.payload)
      state.cart.splice(index, 1)
    },
    // Добавление ингредиента из заказа
    addIngredient(state, action: PayloadAction<TIngredient>) {
      if (action.payload.type === 'bun') {
        const index = state.cart.findIndex(bun => bun.type === 'bun')
        index !== -1
          ?
          state.cart.splice(index, 1, action.payload)
          :
          state.cart.push(action.payload)
      } else {
        state.cart.push(action.payload)
      }
    },
    // Сортировка корзины
    sortCart(state, action) {
      const { hoverIndex, dragIndex } = action.payload
      const dragItem = state.cart[dragIndex]
      if (dragItem) {
        const prevItem = state.cart.splice(hoverIndex, 1, dragItem)
        state.cart.splice(dragIndex, 1, prevItem[0])
      }
    },
    // Действия с модальным окном заказа
    openOrderModal(state) {
      state.orderModal = true
    },
    closeOrderModal(state) {
      state.orderModal = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.ingredientsRequest = true
        state.ingredientsFailed = false
        state.loader = true
      })
      .addCase(getIngredients.fulfilled, (state, action: PayloadAction<Array<TIngredient>>) => {
        state.ingredients = action.payload
        state.ingredientsRequest = false
        state.loader = false
      })
      .addCase(getIngredients.rejected, (state) => {
        state.ingredientsRequest = false
        state.ingredientsFailed = true
        state.loader = false
      })
      .addCase(sendOrder.pending, (state) => {
        state.loader = true
        state.orderRequest = true
        state.orderFailed = false
      })
      .addCase(sendOrder.fulfilled, (state, action: PayloadAction<TOrder>) => {
        state.order = action.payload
        state.orderRequest = false
        state.loader = false
        state.orderModal = true
        state.cart = initialState.cart
      })
      .addCase(sendOrder.rejected, (state) => {
        state.orderRequest = false
        state.orderFailed = true
        state.loader = false
        state.orderModal = false
      })
  }
})
const { actions, reducer } = ingredientsSlice;

export const {
  swithTab,
  openIngredientModal,
  deleteIngredient,
  addIngredient,
  sortCart,
  openOrderModal,
  closeOrderModal,
} = actions;

export default reducer;