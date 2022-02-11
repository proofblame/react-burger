import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import api from '../../utils/api'

import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { IngredientsContext } from '../../services/ingredients-context'
import { CartContext } from '../../services/cart-context';
import { Order } from '../../services/order-context';


import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { getIngredients } from '../../services/actions/ingredients';


function App() {
  const dispatch = useDispatch()
  const { ingredients, cart } = useSelector(store => store.ingredients)

  const [modalActive, setModalActive] = useState({
    ingredientModal: false,
    orderModal: false,
  })
  // const [ingredient, setIngredient] = useState(null)
  // const [cart, setCart] = useState();
  const [order, setOrder] = useState([])
  const [orderDetails, setOrderDetails] = useState(null)


  useEffect(
    () => {
      dispatch(getIngredients())
    },
    [dispatch]
  )

  const sendOrder = async (order) => {
    try {
      const res = await api.sendData(order)
      setOrderDetails(res)
      // setModalActive({
      //   ...modalActive,
      //   orderModal: true
      // })
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseModal = () => {
    // setModalActive({
    //   ...modalActive,
    //   ingredientModal: false,
    //   orderModal: false,
    // })
    // setIngredient(null)
  }




  return (

    <section className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor onOpen={sendOrder} fieldName='bun' />
        </DndProvider>
      </main>
    </section>

    /* {modalActive.orderModal &&
      (
        <Modal onClose={handleCloseModal} active={modalActive.orderModal} >
          {
            orderDetails &&
            <OrderDetails orderDetails={orderDetails} />
          }
        </Modal>
      )
    } */
  );
}

export default App;
