import styles from './burger-constructor-elements.module.css'
import { ingredientPropTypes } from '../../../utils/types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState } from 'react';

const BurgerConstructorElements = ({ data }) => {
  const [randomIngredients, setRandomIngredients] = useState([])

  function randoms(arr, length) {
    return first(shuffle(arr), length);
  }

  function first(arr, length) {
    return arr.slice(0, length);
  }

  function shuffle(arr) {
    let result = [];

    while (arr.length > 0) {
      let random = getRandomInt(0, arr.length - 1);
      let elem = arr.splice(random, 1)[0];
      result.push(elem);
    }

    return result;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const withoutBuns = data.filter((item) => {
    return item.type !== 'bun'
  })

  const ingredientItem = randomIngredients.map((ingredient, index) => (
    <li className={styles.burgerElement} key={index}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </li>
  ))

  useEffect(() => {
    const arr = randoms(withoutBuns, 7)
    randoms(withoutBuns, 7)
    setRandomIngredients(
      arr
    )
  }, [])

  return (
    <div className={styles.constructorWrapper}>
      <div className={styles.burgerElement}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${data[0].name} (верх)`}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>

      <ul className={styles.burgerBody}>
        {ingredientItem}
      </ul>

      <div className={styles.burgerElement}>
        <ConstructorElement
          type="bottom"
          text={`${data[0].name} (низ)`}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
    </div>
  )
}

BurgerConstructorElements.propTypes = {
  data: ingredientPropTypes.isRequired
};

export default BurgerConstructorElements