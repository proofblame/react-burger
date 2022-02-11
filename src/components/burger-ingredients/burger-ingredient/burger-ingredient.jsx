import styles from './burger-ingredient.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux'
import { openIngredientModal } from '../../../services/reducers/ingredients'
import { ingredientDetails } from '../../../utils/types'
import { useDrag } from "react-dnd";

const BurgerIngredient = ({ ingredient }) => {

  const { image, price, name, _id } = ingredient
  const dispatch = useDispatch()

  const handleOpenIngredientModal = (ingredient) => {
    dispatch(openIngredientModal(ingredient))
  }

  const [{ opacity }, dragRef] = useDrag({
    type: 'bun',
    item: { _id },
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1,
    })
  });

  return (
    <li
      className={styles.cardItem}
      onClick={() => handleOpenIngredientModal(ingredient)}
      ref={dragRef}
      style={{ opacity }}
    >
      <img
        src={image}
        alt={image}
        className={styles.cardImage} />
      <div className={styles.price}>
        <span>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.cardTitle}>{name}</p>
    </li>
  )
}

BurgerIngredient.propTypes = {
  ingredient: ingredientDetails.isRequired,
};

export default BurgerIngredient