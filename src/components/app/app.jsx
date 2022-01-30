import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import api from '../../utils/api'
import { useEffect, useState } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [modalActive, setModalActive] = useState({
    ingredientModal: false,
    orderModal: false,
  })
  const [ingredient, setIngredient] = useState(null)


  const getData = async () => {
    try {
      const res = await api.getData()
      setIngredients(res.data)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
    <>
      {ingredients &&
        <section className={styles.app}>
          <AppHeader />
          <main className={styles.main}>
            <BurgerIngredients data={ingredients} onOpen={handleOpenIngredientModal} />
            <BurgerConstructor data={ingredients} onOpen={handleOpenOrderModal} />
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

    </>
  );
}

export default App;
