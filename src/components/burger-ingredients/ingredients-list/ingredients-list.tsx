import styles from './ingredients-list.module.css'
import { TIngredientsList } from '../../../utils/types'
import { forwardRef, Ref } from 'react'
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

const IngredientsList = forwardRef(({ ingredients, title }: TIngredientsList, ref: Ref<HTMLHeadingElement>) => {

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


export default IngredientsList
