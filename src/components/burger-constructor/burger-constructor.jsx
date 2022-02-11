import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorList from './constructor-list/constructor-list'
import PropTypes from 'prop-types';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useDrop } from 'react-dnd';

import { Order } from '../../services/order-context';

import { useSelector, useDispatch } from 'react-redux';

import DndField from '../dnd-field/dnd-field';
import { addIngredient } from '../../services/reducers/ingredients';


const BurgerConstructor = ({ onOpen, fieldName }) => {
  // const { cart } = useContext(CartContext)
  // const { order, setOrder } = useContext(Order)
  const { cart, order, currentFrame } = useSelector(store => store.ingredients)
  const dispatch = useDispatch()

  const totalCost = useMemo(() => {
    if (cart.length > 0) {
      return cart
        .map(item => item.price * (item.type === 'bun' ? 2 : 1))
        .reduce((sum, current) => { return sum + current })
    } else {
      return 0
    }
  }, [cart])


  const [{ isHover }, dropTarget] = useDrop({
    accept: fieldName === 'bun' ? 'bun' : 'stuff',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(ingredient) {
      dispatch(addIngredient(ingredient))
      // currentFrame === 'bun' ? 'stuff' : 'bun'
    },
  });



  return (
    <section className={styles.burgerConstructor} >
      {cart.length > 0 ?
        <>
          <ConstructorList />
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
        </>
        :
        <DndField target={dropTarget} onHover={isHover} text='Выберите булку' />
      }
    </section >
  );
};

BurgerConstructor.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
