import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import api from '../../utils/api'
import { useCallback, useEffect, useState } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { IngredientsContext } from '../../contexts/ingredients-context'
import { CartContext } from '../../contexts/cart-context';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [modalActive, setModalActive] = useState({
    ingredientModal: false,
    orderModal: false,
  })
  const [ingredient, setIngredient] = useState(null)
  const [cart, setCart] = useState([]);


  const getData = useCallback(async () => {
    try {
      const res = await api.getData()
      setIngredients(res.data)
      setCart(res.data)
    } catch (err) {
      console.error(err);
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const handleOpenIngredientModal = (ingredient) => {
    setIngredient(ingredient)
    setModalActive({
      ...modalActive,
      ingredientModal: true
    })
  }

  const handleOpenOrderModal = () => {
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
          <OrderDetails />
        </Modal>
      </CartContext.Provider>
    </IngredientsContext.Provider>
  );
}

export default App;
