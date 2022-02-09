import api from '../../utils/api'
import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
} from '../reducers/ingredients'

export const getIngredients = () => {

  return async (dispatch) => {
    dispatch(getIngredientsRequest())
    try {
      const res = await api.getData()
      dispatch(getIngredientsSuccess(res.data));
    } catch {
      dispatch(getIngredientsFailed());
    }
  };
}
