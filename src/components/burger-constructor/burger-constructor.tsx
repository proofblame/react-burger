import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorList from './constructor-list/constructor-list'

import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from '../../services/hooks';
import { useMemo } from 'react';

import DndField from '../dnd-field/dnd-field';
import { addIngredient, closeOrderModal } from '../../services/reducers/ingredients';
import { sendOrder } from '../../services/actions/ingredients';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { v4 as uuid } from 'uuid'
import CircularProgress from '@mui/material/CircularProgress';
import ModalOverlay from '../modal/modal-overlay/modal-overlay';
import { useHistory } from 'react-router-dom';
import { TIngredientDetails } from '../../utils/types';
import { FC } from 'react';


const BurgerConstructor: FC = () => {
  const { cart, orderModal, loader } = useSelector(store => store.ingredients)
  const { userData } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  const totalCost = useMemo(() => {
    if (cart.length > 0) {
      return cart
        .map((item: { price: number; type: string; }) => item.price * (item.type === 'bun' ? 2 : 1))
        .reduce((sum: any, current: any) => { return sum + current })
    } else {
      return 0
    }
  }, [cart])


  const [{ isHover }, dropTarget] = useDrop({
    accept: 'bun',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop: (ingredient: TIngredientDetails) => {
      const uid = uuid()
      dispatch(addIngredient({ ...ingredient, uid }))
    },
  });

  const handleOpenOrderModal = (cart: any[]) => {
    if (!userData) {
      history.replace('/login')
      return
    }

    const idList = cart.map((item: { _id: any; }) => item._id)
    dispatch(sendOrder(idList))
  }
  const handleCloseModal = () => {
    dispatch(closeOrderModal())
  }

  return (
    <>
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
              <Button type="primary" size="medium" onClick={() => handleOpenOrderModal(cart)}>
                Оформить заказ
              </Button>
            </div>
          </>
          :
          <DndField target={dropTarget} onHover={isHover} text='Выберите булку' />
        }
      </section >
      {
        orderModal &&
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      }
      {
        loader &&
        <ModalOverlay>
          <CircularProgress className={styles.loader} size="100px" />
        </ModalOverlay>
      }
    </>
  );
};

export default BurgerConstructor;
