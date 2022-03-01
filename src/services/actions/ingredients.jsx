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

export const getIngredients = () => {

  return async (dispatch) => {
    dispatch(getIngredientsRequest())
    try {
      const res = await api.getData()
      dispatch(getIngredientsSuccess(res.data));
    } catch (error) {
      dispatch(getIngredientsFailed());
      console.error(error)
    }
  };
}

export const sendOrder = (idList) => {

  return async (dispatch) => {
    dispatch(enableLoader());
    dispatch(sendOrderRequest())
    try {
      const res = await api.sendData(idList)
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
