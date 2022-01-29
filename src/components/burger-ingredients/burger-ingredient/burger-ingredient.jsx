import styles from './burger-ingredient.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientPropTypes } from '../../../utils/types'
import { useState } from 'react'

import Modal from '../../modal/modal'
import IngredientDetails from '../../ingredient-details/ingredient-details'

const BurgerIngredient = ({ ingredients }) => {
  const [modalActive, setModalActive] = useState(false)
  const [ingredient, setIngredient] = useState({})

  const handleOpenModal = (ingredient) => {
    setIngredient(ingredient)
    setModalActive(true)
  }
  const handleCloseModal = () => {
    setModalActive(false)
    setIngredient({})
  }

  const ingredientItem = ingredients.map((ingredient) => (
    <li className={styles.cardItem} key={ingredient._id} onClick={() => handleOpenModal(ingredient)}>
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
      <ul className={styles.cardList}>
        {ingredientItem}
      </ul>
      <Modal onClose={handleCloseModal} active={modalActive} header='Детали ингредиента'>
        <IngredientDetails selectedCard={ingredient} />
      </Modal>
    </>

  )
}

BurgerIngredient.propTypes = {
  ingredients: ingredientPropTypes.isRequired
};

export default BurgerIngredient
