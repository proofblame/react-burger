import styles from './burger-ingredient.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
const BurgerIngredient = ({ ingredients }) => {

  const ingredientItem = ingredients.map((ingredient, index) => (
    <li className={styles.cardItem} key={index}>
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

export default BurgerIngredient
