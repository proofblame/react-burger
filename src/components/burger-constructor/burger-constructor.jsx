import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientsPropTypes } from '../../utils/types'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import { useState } from 'react'


const BurgerConstructor = ({ data }) => {
  const [modalActive, setModalActive] = useState(false)

  const handleOpenModal = () => {
    setModalActive(true)
  }
  const handleCloseModal = () => {
    setModalActive(false)

  }
  return (
    <>
      <section className={styles.burgerConstructor}>
        <BurgerConstructorElements data={data} />
        <div className={styles.total}>
          <div className={styles.price}>
            <span className={styles.priceNumber}>610</span>
            <div className={styles.currencyIcon}>
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <Button type="primary" size="medium" onClick={handleOpenModal}>
            Оформить заказ
          </Button>
        </div>
      </section >

      <Modal onClose={handleCloseModal} active={modalActive} >
        <OrderDetails />
      </Modal>
    </>
  );
};

BurgerConstructor.propTypes = {
  data: ingredientsPropTypes.isRequired
};

export default BurgerConstructor;
