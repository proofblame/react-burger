import styles from './burger-constructor-elements.module.css'
import { ingredientPropTypes } from '../../../utils/types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { randomData } from '../../../utils/random'

const BurgerConstructorElements = ({ data }) => {


  const ingredientItem = randomData.map((ingredient, index) => (
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


  return (
    (

      data.length > 0 &&
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

  )

}

BurgerConstructorElements.propTypes = {
  data: ingredientPropTypes.isRequired
};

export default BurgerConstructorElements