import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import IngredientsList from './ingredients-list/ingredients-list'
import { useRef } from 'react'
import { useSelector, useDispatch } from '../../services/hooks';
import { swithTab } from '../../services/reducers/ingredients';
import useSwitchTabs from '../use-switch-tabs/use-switch-tabs';
import { TIngredientDetails } from '../../utils/types';
import { FC } from 'react';

const BurgerIngredients: FC = () => {
  const dispatch = useDispatch()
  const { ingredients, currentTab } = useSelector((store: any) => store.ingredients)
  const bunsRef = useRef<HTMLHeadingElement>(null)
  const saucesRef = useRef<HTMLHeadingElement>(null)
  const fillingsRef = useRef<HTMLHeadingElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const smoothSettings: ScrollIntoViewOptions = { block: "start", behavior: "smooth" }
  const buns = ingredients.filter((item: TIngredientDetails) => {
    return item.type === 'bun'
  })
  const sauces = ingredients.filter((item: TIngredientDetails) => {
    return item.type === 'sauce'
  })
  const fillings = ingredients.filter((item: TIngredientDetails) => {
    return item.type === 'main'
  })
  const handleBunTab = (event: string) => {
    dispatch(swithTab(event))
    bunsRef?.current?.scrollIntoView(smoothSettings);
  }
  const handleSauceTab = (event: string) => {
    dispatch(swithTab(event))
    saucesRef?.current?.scrollIntoView(smoothSettings);
  }
  const handleFillingsTab = (event: string) => {
    dispatch(swithTab(event))
    fillingsRef?.current?.scrollIntoView(smoothSettings);
  }
  const setCurrent = (value: string) => dispatch(swithTab(value))

  useSwitchTabs(rootRef, bunsRef, () => setCurrent('buns'))
  useSwitchTabs(rootRef, saucesRef, () => setCurrent('sauces'))
  useSwitchTabs(rootRef, fillingsRef, () => setCurrent('fillings'))

  return (
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
  );
};

export default BurgerIngredients;
