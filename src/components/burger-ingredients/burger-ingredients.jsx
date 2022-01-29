import { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import BurgerIngredient from './burger-ingredient/burger-ingredient'
import { ingredientsPropTypes } from '../../utils/types'
import PropTypes from 'prop-types';

const BurgerIngredients = ({ data, onOpen }) => {
  const [current, setCurrent] = useState('one')

  const buns = data.filter((item) => {
    return item.type === 'bun'
  })
  const sauces = data.filter((item) => {
    return item.type === 'sauce'
  })
  const fillings = data.filter((item) => {
    return item.type === 'main'
  })

  return (
    <>
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
          <BurgerIngredient ingredients={buns} onOpen={onOpen} />
          <h3 className={styles.subtitle}>
            Соусы
          </h3>
          <BurgerIngredient ingredients={sauces} onOpen={onOpen} />
          <h3 className={styles.subtitle}>
            Начинки
          </h3>
          <BurgerIngredient ingredients={fillings} onOpen={onOpen} />
        </div>
      </section>
    </>

  );
};

BurgerIngredients.propTypes = {
  data: ingredientsPropTypes.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default BurgerIngredients;
