import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart-context';
import { TotalCost } from '../../contexts/total-cost-context';
import { Order } from '../../contexts/order-context';

const BurgerConstructor = ({ onOpen }) => {
  const { cost, costDispatch } = useContext(TotalCost)
  const { cart } = useContext(CartContext)
  const { order, setOrder } = useContext(Order)

  const [bun, setBun] = useState(null)
  const [stuff, setStuff] = useState([])

  useEffect(() => {
    if (cart.length > 0) {
      setBun(cart.find(bun => bun.type === 'bun'))
      setStuff(cart.filter(stuff => stuff.type !== 'bun'))
      const totalCost = cart
        .map(item => item.price * (item.type === 'bun' ? 2 : 1))
        .reduce((sum, current) => { return sum + current })
      costDispatch({
        type: 'sum', payload: totalCost
      })
      const cartId = cart.map(item => item._id)
      setOrder(
        cartId
      )
    } else {
      setBun(null)
      setStuff([])
      costDispatch({
        type: 'reset', payload: 0
      })
      setOrder(Order)
    }
  }, [cart, costDispatch])

  return (
    <section className={styles.burgerConstructor}>
      {bun &&
        <BurgerConstructorElements bun={bun} stuff={stuff} />
      }
      <div className={styles.total}>
        <div className={styles.price}>
          <span className={styles.priceNumber}>{cost.cost}</span>
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
