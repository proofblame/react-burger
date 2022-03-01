import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import PropTypes from 'prop-types';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../../services/cart-context';
import { Order } from '../../services/order-context';

const BurgerConstructor = ({ onOpen }) => {
  const { cart } = useContext(CartContext)
  const { order, setOrder } = useContext(Order)

  const totalCost = useMemo(() => {
    return cart
      .map(item => item.price * (item.type === 'bun' ? 2 : 1))
      .reduce((sum, current) => { return sum + current })
  }, [cart])

  const bun = useMemo(() => {
    return cart.find(bun => bun.type === 'bun')
  }, [cart])

  const stuff = useMemo(() => {
    return cart.filter(stuff => stuff.type !== 'bun')
  }, [cart])


  useEffect(() => {
    if (cart.length > 0) {
      const cartId = cart.map(item => item._id)
      setOrder(
        cartId
      )

    } else {
      setOrder(Order)
    }
  }, [cart])

  return (
    <section className={styles.burgerConstructor}>
      {bun &&
        <BurgerConstructorElements bun={bun} stuff={stuff} />
      }
      <div className={styles.total}>
        <div className={styles.price}>
          <span className={styles.priceNumber}>{totalCost}</span>
          <div className={styles.currencyIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button type="primary" size="medium" onClick={() => onOpen(order)}>
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
