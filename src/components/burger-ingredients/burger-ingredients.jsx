import { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one')

  return (
    <>
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
      <h3 className={styles.subtitle}>
        Булки
      </h3>
      <ul className={styles.cardList}>
        <li className={styles.cardItem}>


        </li>
      </ul>
    </>
  );
};

export default BurgerIngredients;
