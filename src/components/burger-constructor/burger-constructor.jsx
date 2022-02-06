import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/types'
import { CartContext } from '../../contexts/cart-context';
import { useContext, useState } from 'react';


const BurgerConstructor = ({ onOpen }) => {
  const { cart, setCart } = useContext(CartContext)


  return (
    <section className={styles.burgerConstructor}>
      <BurgerConstructorElements />
      <div className={styles.total}>
        <div className={styles.price}>
          <span className={styles.priceNumber}>610</span>
          <div className={styles.currencyIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button type="primary" size="medium" onClick={onOpen}>
          Оформить заказ
        </Button>
      </div>
    </section >
  );
};

BurgerConstructor.propTypes = {

  onOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
