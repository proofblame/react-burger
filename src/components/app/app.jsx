import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import api from '../../utils/api'
import { useCallback, useEffect, useReducer, useState } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { IngredientsContext } from '../../contexts/ingredients-context'
import { CartContext } from '../../contexts/cart-context';
import { TotalCost } from '../../contexts/total-cost-context';
import { Order } from '../../contexts/order-context';

import { defaultCart } from '../../utils/data'

const initialCost = { cost: 0 }

const totalCostReducer = (state, action) => {
  switch (action.type) {
    case "sum":
      return { cost: action.payload }
    case "reset":
      return initialCost
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [modalActive, setModalActive] = useState({
    ingredientModal: false,
    orderModal: false,
  })
  const [ingredient, setIngredient] = useState(null)
  const [cart, setCart] = useState(defaultCart);
  const [order, setOrder] = useState([])
  const [orderDetails, setOrderDetails] = useState(null)

  const [cost, costDispatch] = useReducer(totalCostReducer, initialCost, undefined)


  const getData = useCallback(async () => {
    try {
      const res = await api.getData()
      setIngredients(res.data)
    } catch (err) {
      console.error(err);
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const sendOrder = async (order) => {
    try {
      const res = await api.sendData(order)
      setOrderDetails(res)
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

  const handleOpenOrderModal = async (order) => {
    await sendOrder(order)
    setModalActive({
      ...modalActive,
      orderModal: true
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
    <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <TotalCost.Provider value={{ cost, costDispatch }}>
          <Order.Provider value={{ order, setOrder }}>
            {ingredients.length &&
              <section className={styles.app}>
                <AppHeader />
                <main className={styles.main}>
                  <BurgerIngredients onOpen={handleOpenIngredientModal} />
                  <BurgerConstructor onOpen={handleOpenOrderModal} />
                </main>
              </section>
            }

            <Modal onClose={handleCloseModal} active={modalActive.ingredientModal} header='Детали ингредиента'>
              {
                ingredient &&
                <IngredientDetails selectedCard={ingredient} />
              }
            </Modal>

            <Modal onClose={handleCloseModal} active={modalActive.orderModal} >
              {
                orderDetails &&
                <OrderDetails orderDetails={orderDetails} />
              }
            </Modal>
          </Order.Provider>
        </TotalCost.Provider>
      </CartContext.Provider>
    </IngredientsContext.Provider>
  );
}

export default App;
