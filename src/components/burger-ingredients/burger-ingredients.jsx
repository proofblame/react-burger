import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import IngredientsList from './ingredients-list/ingredients-list'

import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';


import { swithTab, closeIngredientModal } from '../../services/reducers/ingredients';

import useSwitchTabs from '../use-switch-tabs/use-switch-tabs';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

const BurgerIngredients = () => {

  const dispatch = useDispatch()

  const { ingredients, currentTab, ingredientModal } = useSelector(store => store.ingredients)

  const bunsRef = useRef(null)
  const saucesRef = useRef(null)
  const fillingsRef = useRef(null)
  const rootRef = useRef(null)

  const smoothSettings = { block: "start", behavior: "smooth" }

  const buns = ingredients.filter((item) => {
    return item.type === 'bun'
  })
  const sauces = ingredients.filter((item) => {
    return item.type === 'sauce'
  })
  const fillings = ingredients.filter((item) => {
    return item.type === 'main'
  })

  const handleBunTab = (event) => {
    dispatch(swithTab(event))
    bunsRef.current.scrollIntoView(smoothSettings);
  }
  const handleSauceTab = (event) => {
    dispatch(swithTab(event))
    saucesRef.current.scrollIntoView(smoothSettings);
  }
  const handleFillingsTab = (event) => {
    dispatch(swithTab(event))
    fillingsRef.current.scrollIntoView(smoothSettings);
  }

  const setCurrent = value => dispatch(swithTab(value))

  useSwitchTabs(rootRef, bunsRef, () => setCurrent('buns'))
  useSwitchTabs(rootRef, saucesRef, () => setCurrent('sauces'))
  useSwitchTabs(rootRef, fillingsRef, () => setCurrent('fillings'))

  const handleCloseModal = () => {
    dispatch(closeIngredientModal())
  }

  return (
    <>
      <section className={styles.burgerIngredients} >
        <h2 className={styles.title}>
          Соберите бургер
        </h2>

        <div className={styles.tabs} >
          <div style={{ display: 'flex' }}>
            <Tab value="buns" active={currentTab === 'buns'} onClick={handleBunTab}>
              Булки
            </Tab>
            <Tab value="sauces" active={currentTab === 'sauces'} onClick={handleSauceTab}>
              Соусы
            </Tab>
            <Tab value="fillings" active={currentTab === 'fillings'} onClick={handleFillingsTab}>
              Начинки
            </Tab>
          </div>
        </div>
        <div className={styles.table} ref={rootRef}>
          <IngredientsList ingredients={buns} title="Булки" ref={bunsRef} />
          <IngredientsList ingredients={sauces} title="Соусы" ref={saucesRef} />
          <IngredientsList ingredients={fillings} title="Начинки" ref={fillingsRef} />
        </div>

      </section>

      {ingredientModal &&
        <Modal onClose={handleCloseModal} header='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      }
    </>
  );
};

export default BurgerIngredients;
