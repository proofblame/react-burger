import styles from './burger-constructor.module.css'
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import img from '../../../images/bun-01.png'

const BurgerConstructor = () => {
  return (
    <section className={styles.burgerConstructor}>
      <div className={styles.constructorWrapper}>
        <div className={styles.burgerElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
        <div className={styles.burgerBody}>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={img}
            />
          </div>
        </div>
        <div className={styles.burgerElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
      </div>
      <div className={styles.total}>
        <div className={styles.price}>
          <span className={styles.priceNumber}>610</span>
          <div className={styles.currencyIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
