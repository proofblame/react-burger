import styles from './ingredients-list.module.css'
import { ingredientsPropTypes } from '../../../utils/types'
import PropTypes from 'prop-types';
import { forwardRef } from 'react'
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

const IngredientsList = forwardRef(({ ingredients, title }, ref) => {

  const ingredientItem = ingredients.map((ingredient) => (
    <BurgerIngredient ingredient={ingredient} key={ingredient._id} />
  ))

  return (
    <>
      <h3 className={styles.subtitle} ref={ref}>
        {title}
      </h3>
      <ul className={styles.cardList}>
        {ingredientItem}
      </ul>
    </>
  )
})

IngredientsList.propTypes = {
  ingredients: ingredientsPropTypes.isRequired,
  title: PropTypes.string.isRequired,
};

export default IngredientsList
