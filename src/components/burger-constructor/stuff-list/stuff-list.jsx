import styles from './stuff-list.module.css'
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient'

const StuffList = ({ target, stuff, onHover }) => {

  const classes = `${styles.burgerBody} ${styles.borderColor}`

  const borderColor = onHover ? classes : styles.burgerBody

  const ingredientItem = stuff.map((ingredient, index) => (
    <ConstructorIngredient ingredient={ingredient} key={index} />
  ))

  return (
    <ul className={borderColor} ref={target}>
      {ingredientItem}
    </ul>
  )
}

export default StuffList