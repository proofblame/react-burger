import api from '../../utils/api'
import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
  sendOrderRequest,
  sendOrderSuccess,
  sendOrderFailed,
  openOrderModal,
  closeOrderModal,
  clearCart,
  enableLoader,
  disableLoader,
} from '../reducers/ingredients'
import { AppDispatch } from '../types';


export const getIngredients = () => {

  return async (dispatch: AppDispatch) => {
    dispatch(getIngredientsRequest())
    try {
      const res = await api.getIngredients()
      dispatch(getIngredientsSuccess(res.data));
    } catch (error) {
      dispatch(getIngredientsFailed());
      console.error(error)
    }
  };
}

export const sendOrder = (idList: Array<string>) => {

  return async (dispatch: AppDispatch) => {
    dispatch(enableLoader());
    dispatch(sendOrderRequest())
    try {
      const res = await api.sendIngredients(idList)
      dispatch(sendOrderSuccess(res.order));
      dispatch(openOrderModal());
      dispatch(clearCart());
    } catch (error) {
      dispatch(sendOrderFailed());
      dispatch(closeOrderModal());
      console.error(error)
    } finally {
      dispatch(disableLoader());
    }
  };
}
