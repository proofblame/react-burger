import styles from './burger-ingredient.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { openIngredientModal } from '../../../services/reducers/ingredients'
import { ingredientDetails } from '../../../utils/types'
import { useDrag } from "react-dnd";


const BurgerIngredient = ({ ingredient }) => {

  const { image, price, name } = ingredient
  const dispatch = useDispatch()
  const { cart } = useSelector(store => store.ingredients)

  const handleOpenIngredientModal = (ingredient) => {
    dispatch(openIngredientModal(ingredient))
  }

  const [{ opacity }, dragRef] = useDrag({
    type: 'bun',
    item: ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1,
    })
  });

  let counter = 0
  cart.forEach(ingredient => ingredient.name === name && (ingredient.type === 'bun' ? counter += 2 : counter += 1))

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
      {counter > 0 &&
        <div className={styles.count} >
          <Counter count={counter} size="default" />
        </div>
      }
    </li>
  )
}

BurgerIngredient.propTypes = {
  ingredient: ingredientDetails.isRequired,
};

export default BurgerIngredient