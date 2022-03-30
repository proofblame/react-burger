import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    // Получение ингредиентов
    getIngredientsRequest(state) {
      state.ingredientsRequest = true
      state.ingredientsFailed = false
    },
    getIngredientsSuccess(state, action: PayloadAction<Array<TIngredient>>) {
      state.ingredients = action.payload
      state.ingredientsRequest = false
    },
    getIngredientsFailed(state) {
      state.ingredientsRequest = false
      state.ingredientsFailed = true
    },
    // Переключение Таба
    swithTab(state, action: PayloadAction<string>) {
      state.currentTab = action.payload
    },
    // Получение информации об ингредиенте
    openIngredientModal(state, action: PayloadAction<TIngredient>) {
      state.ingredientModal = true
      state.ingredient = action.payload
    },
    closeIngredientModal(state) {
      state.ingredient = null
      state.ingredientModal = false
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
    // Очистка корзины
    clearCart(state) {
      state.cart = initialState.cart
    },
    // Отправка заказа
    sendOrderRequest(state) {
      state.orderRequest = true
      state.orderFailed = false
    },
    sendOrderSuccess(state, action: PayloadAction<TOrder>) {
      state.order = action.payload
      state.orderRequest = false
    },
    sendOrderFailed(state) {
      state.orderRequest = false
      state.orderFailed = true
    },
    // Действия с модальным окном заказа
    openOrderModal(state) {
      state.orderModal = true
    },
    closeOrderModal(state) {
      state.orderModal = false
    },
    // Открытие/закрытие лоадера
    enableLoader(state) {
      state.loader = true
    },
    disableLoader(state) {
      state.loader = false
    },
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
  addIngredient,
  sortCart,
  sendOrderRequest,
  sendOrderSuccess,
  sendOrderFailed,
  openOrderModal,
  closeOrderModal,
  clearCart,
  enableLoader,
  disableLoader,

} = actions;

export default reducer;