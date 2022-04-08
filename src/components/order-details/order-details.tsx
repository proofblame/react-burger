import styles from './order-details.module.css'
import done from '../../images/done.png'
import { FC } from 'react';
import { useSelector } from '../../services/hooks';

const OrderDetails: FC = () => {
  const { order } = useSelector(store => store.ingredients)

  return (
    order &&
    <div className={styles.order}>
      <h4 className={styles.number}>{order.number}</h4>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.image} src={done} alt="done" />
      <p className={styles.caption}>Ваш заказ начали готовить</p>
      <p className={styles.subcaption}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails;
