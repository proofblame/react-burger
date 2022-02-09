import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import api from '../../utils/api'
import { useCallback, useEffect, useReducer, useState, useMemo } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { IngredientsContext } from '../../services/ingredients-context'
import { CartContext } from '../../services/cart-context';
import { Order } from '../../services/order-context';

import { defaultCart } from '../../utils/data'
import { getIngredients } from '../../services/actions/ingredients';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  const [ingredients, setIngredients] = useState([]);
  const ingredientsMemo = useMemo(() => ({ ingredients, setIngredients }), [ingredients])

  const [modalActive, setModalActive] = useState({
    ingredientModal: false,
    orderModal: false,
  })
  const [ingredient, setIngredient] = useState(null)
  const [cart, setCart] = useState(defaultCart);
  const [order, setOrder] = useState([])
  const [orderDetails, setOrderDetails] = useState(null)



  const getData = useCallback(async () => {
    try {
      const res = await api.getData()
      setIngredients(res.data)
    } catch (err) {
      console.error(err);
    }
  }, [])

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
      setModalActive({
        ...modalActive,
        orderModal: true
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleOpenIngredientModal = (ingredient) => {
    setIngredient(ingredient)
    setModalActive({
      ...modalActive,
      ingredientModal: true
    })
  }

  const handleCloseModal = () => {
    setModalActive({
      ...modalActive,
      ingredientModal: false,
      orderModal: false,
    })
    setIngredient(null)
  }


  return (
    <>

      <section className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients onOpen={handleOpenIngredientModal} />
          <BurgerConstructor onOpen={sendOrder} />
        </main>
      </section>


      {/* {modalActive.ingredientModal &&
            (
              <Modal onClose={handleCloseModal} header='Детали ингредиента'>
                <IngredientDetails selectedCard={ingredient} />
              </Modal>
            )
          }
          {modalActive.orderModal &&
            (
              <Modal onClose={handleCloseModal} active={modalActive.orderModal} >
                {
                  orderDetails &&
                  <OrderDetails orderDetails={orderDetails} />
                }
              </Modal>
            )
          } */}
    </>
  );
}

export default App;
