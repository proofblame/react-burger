import { useEffect, useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import BurgerIngredient from './burger-ingredient/burger-ingredient'

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState('one')

  const buns = data.filter((item, index) => {
    return item.type === 'bun'
  })
  const sauces = data.filter((item, index) => {
    return item.type === 'sauce'
  })
  const fillings = data.filter((item, index) => {
    return item.type === 'main'
  })
  useEffect(() => {
    console.log(buns)
  }, [])

  return (
    <section className={styles.burgerIngredients}>
      <h2 className={styles.title}>
        Соберите бургер
      </h2>
      <div className={styles.tabs}>
        <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </div>
      <div className={styles.table}>
        <h3 className={styles.subtitle}>
          Булки
        </h3>
        <BurgerIngredient ingredients={buns} />
        <h3 className={styles.subtitle}>
          Соусы
        </h3>
        <BurgerIngredient ingredients={sauces} />
        <h3 className={styles.subtitle}>
          Начинки
        </h3>
        <BurgerIngredient ingredients={fillings} />
      </div>
    </section>
  );
};

export default BurgerIngredients;
