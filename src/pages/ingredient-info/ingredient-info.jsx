import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import style from './ingredient-info.module.css'


export const IngredientInfo = () => {

  return (
    <section className={style.ingredient}>
      <h3 className={style.title}>Детали ингредиента</h3>
      <IngredientDetails />
    </section>
  )
}
