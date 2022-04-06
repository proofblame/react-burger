import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api'
// import {
//   getIngredientsRequest,
//   getIngredientsSuccess,
//   getIngredientsFailed,
//   sendOrderRequest,
//   sendOrderSuccess,
//   sendOrderFailed,
//   openOrderModal,
//   closeOrderModal,
//   clearCart,
//   enableLoader,
//   disableLoader,
// } from '../reducers/ingredients'
// import { AppDispatch } from '../types';


export const getIngredients = createAsyncThunk(
  'getIngredients',
  async () => {
    try {
      const res = await api.getIngredients()
      return res.data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const sendOrder = createAsyncThunk(
  'sendOrder',
  async (idList: Array<string>) => {
    try {
      const res = await api.sendIngredients(idList)
      return res.order
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)