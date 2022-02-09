import { useState, createRef, useCallback, useMemo } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import BurgerIngredient from './burger-ingredient/burger-ingredient'
import { ingredientsPropTypes } from '../../utils/types'
import PropTypes from 'prop-types';

import { IngredientsContext } from '../../services/ingredients-context';
import { useContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { swithTab } from '../../services/reducers/ingredients';

const BurgerIngredients = ({ onOpen }) => {
  const dispatch = useDispatch()
  const bunsRef = createRef()
  const saucesRef = createRef()
  const fillingsRef = createRef()

  const { ingredients, currentTab } = useSelector(store => store.ingredients)

  const buns = ingredients.filter((item) => {
    return item.type === 'bun'
  })
  const sauces = ingredients.filter((item) => {
    return item.type === 'sauce'
  })
  const fillings = ingredients.filter((item) => {
    return item.type === 'main'
  })

  const setCurrent = value => dispatch(swithTab(value))


  return (
    <>
      <section className={styles.burgerIngredients}>
        <h2 className={styles.title}>
          Соберите бургер
        </h2>
        <div className={styles.tabs}>
          <div style={{ display: 'flex' }}>

            <a href="#buns" className={styles.link}>
              <Tab value="buns" active={currentTab === 'buns'} onClick={() => setCurrent('buns')}>
                Булки
              </Tab>
            </a>
            <a href="#sauces" className={styles.link}>
              <Tab value="sauces" active={currentTab === 'sauces'} onClick={() => setCurrent('sauces')}>
                Соусы
              </Tab>
            </a>
            <a href="#fillings" className={styles.link}>
              <Tab value="fillings" active={currentTab === 'fillings'} onClick={() => setCurrent('fillings')}>
                Начинки
              </Tab>
            </a>
          </div>
        </div>
        <div className={styles.table} >
          <BurgerIngredient ingredients={buns} onOpen={onOpen} title="Булки" ref={bunsRef} id='buns' />
          <BurgerIngredient ingredients={sauces} onOpen={onOpen} title="Соусы" ref={saucesRef} id='sauces' />
          <BurgerIngredient ingredients={fillings} onOpen={onOpen} title="Начинки" ref={fillingsRef} id='fillings' />
        </div>
      </section>
    </>

  );
};

BurgerIngredients.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default BurgerIngredients;
