import styles from './constructor-page.module.css'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'

const ConstructorPage = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>
        Соберите бургер
      </h2>

      <div className={styles.wrapper}>
        <BurgerIngredients />
      </div>
    </main>
  )
};

export default ConstructorPage;
