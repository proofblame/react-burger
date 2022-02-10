import { useState, createRef, useCallback, useMemo, useEffect, useRef } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import BurgerIngredient from './burger-ingredient/burger-ingredient'
import { ingredientsPropTypes } from '../../utils/types'
import PropTypes from 'prop-types';

import { IngredientsContext } from '../../services/ingredients-context';
import { useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { swithTab } from '../../services/reducers/ingredients';
import useSwitchTabs from '../use-switch-tabs/use-switch-tabs';

const BurgerIngredients = ({ onOpen }) => {

  const dispatch = useDispatch()
  const { ingredients, currentTab } = useSelector(store => store.ingredients)

  const bunsRef = createRef(null)
  const saucesRef = createRef(null)
  const fillingsRef = createRef(null)
  const rootRef = useRef()

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

  return (
    <>
      <section className={styles.burgerIngredients} >
        <h2 className={styles.title}>
          Соберите бургер
        </h2>
        <div className={styles.tabs}>
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
        <div className={styles.table} >
          <BurgerIngredient ingredients={buns} onOpen={onOpen} title="Булки" ref={bunsRef} />
          <BurgerIngredient ingredients={sauces} onOpen={onOpen} title="Соусы" ref={saucesRef} />
          <BurgerIngredient ingredients={fillings} onOpen={onOpen} title="Начинки" ref={fillingsRef} />
        </div>
      </section>
    </>
  );
};

BurgerIngredients.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default BurgerIngredients;
