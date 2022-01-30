import styles from './burger-ingredient.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientsPropTypes } from '../../../utils/types'
import PropTypes from 'prop-types';


const BurgerIngredient = ({ ingredients, onOpen }) => {

  const ingredientItem = ingredients.map((ingredient) => (
    <li className={styles.cardItem} key={ingredient._id} onClick={() => onOpen(ingredient)}>
      <img src={ingredient.image} alt={ingredient.image} className={styles.cardImage} />
      <div className={styles.price}>
        <span>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.cardTitle}>{ingredient.name}</p>
    </li>
  ))

  return (
    <ul className={styles.cardList}>
      {ingredientItem}
    </ul>
  )
}

BurgerIngredient.propTypes = {
  ingredients: ingredientsPropTypes.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default BurgerIngredient
