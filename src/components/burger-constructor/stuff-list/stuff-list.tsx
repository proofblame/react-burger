import styles from './stuff-list.module.css'
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient'
import { useSelector, useDispatch } from '../../../services/hooks';
import { sortCart } from '../../../services/reducers/ingredients';
import { TStuffList, TIngredientDetails } from '../../../utils/types';

const StuffList = ({ target, onHover }: TStuffList) => {

  const dispatch = useDispatch()
  const { cart } = useSelector(store => store.ingredients)
  const classes = `${styles.burgerBody} ${styles.borderColor}`
  const borderColor = onHover ? classes : styles.burgerBody

  const moveItemHandler = (dragIndex: number, hoverIndex: number) => {
    const dragItem = cart[dragIndex]
    if (dragItem) {
      dispatch(sortCart({ dragItem, hoverIndex, dragIndex }))
    }
  }

  const ingredientItem = cart.map((ingredient: TIngredientDetails, index: number) => (
    ingredient.type !== 'bun' &&
    <ConstructorIngredient ingredient={ingredient} key={ingredient.uid} index={index} onMove={moveItemHandler} />
  ))


  return (
    <ul className={borderColor} ref={target} >
      {ingredientItem}
    </ul>
  )
}


export default StuffList