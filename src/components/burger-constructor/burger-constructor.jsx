import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientsPropTypes } from '../../utils/types'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import PropTypes from 'prop-types';


const BurgerConstructor = ({ data, onOpen }) => {
  return (
    <section className={styles.burgerConstructor}>
      <BurgerConstructorElements data={data} />
      <div className={styles.total}>
        <div className={styles.price}>
          <span className={styles.priceNumber}>610</span>
          <div className={styles.currencyIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button type="primary" size="medium" onClick={onOpen}>
          Оформить заказ
        </Button>
      </div>
    </section >
  );
};

BurgerConstructor.propTypes = {
  data: ingredientsPropTypes.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
