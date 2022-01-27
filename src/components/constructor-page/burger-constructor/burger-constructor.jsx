import styles from './burger-constructor.module.css'
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientsPropTypes } from '../../../utils/types'

const BurgerConstructor = ({ data }) => {

  return (
    <section className={styles.burgerConstructor}>
      <div className={styles.constructorWrapper}>
        <div className={styles.burgerElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <div className={styles.burgerBody}>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text={data[1].name}
              price={data[1].price}
              thumbnail={data[1].image}
            />
          </div>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text={data[1].name}
              price={data[1].price}
              thumbnail={data[1].image}
            />
          </div>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text={data[1].name}
              price={data[1].price}
              thumbnail={data[1].image}
            />
          </div>
          <div className={styles.burgerElement}>
            <div className={styles.dragIcon}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text={data[1].name}
              price={data[1].price}
              thumbnail={data[1].image}
            />
          </div>
        </div>
        <div className={styles.burgerElement}>
          <ConstructorElement
            type="bottom"
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
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

BurgerConstructor.propTypes = {
  data: ingredientsPropTypes.isRequired
};

export default BurgerConstructor;
