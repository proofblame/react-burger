import styles from './burger-ingredient.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientsPropTypes } from '../../../utils/types'
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';


const BurgerIngredient = forwardRef(({ ingredients, onOpen, title, id }, ref) => {

  const currentTab = useSelector(store => store.ingredients)


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
    <>
      <h3 className={styles.subtitle} ref={ref} id={id}>
        {title}
      </h3>
      <ul className={styles.cardList}>
        {ingredientItem}
      </ul>
    </>
  )
})

BurgerIngredient.propTypes = {
  ingredients: ingredientsPropTypes.isRequired,
  onOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BurgerIngredient
