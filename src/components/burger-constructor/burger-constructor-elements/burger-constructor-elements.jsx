import styles from './burger-constructor-elements.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { CartContext } from '../../../contexts/cart-context';
import { useContext } from 'react';

const BurgerConstructorElements = ({ bun, stuff }) => {
  const { cart, setCart } = useContext(CartContext)

  const handleDeleteIngredient = (ingredient) => {
    const newCart = cart.filter(item => item._id !== ingredient._id)
    setCart(newCart)
  }


  const ingredientItem = stuff.map((ingredient, index) => (
    <li className={styles.burgerElement} key={index}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => handleDeleteIngredient(ingredient)}
      />
    </li>
  ))


  return (
    (

      cart.length > 0 &&
      <div className={styles.constructorWrapper}>
        <div className={styles.burgerElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>

        <ul className={styles.burgerBody}>
          {ingredientItem}
        </ul>

        <div className={styles.burgerElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
    )

  )

}

BurgerConstructorElements.propTypes = {
  // cart: ingredientsPropTypes.isRequired
};

export default BurgerConstructorElements