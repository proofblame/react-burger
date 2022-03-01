import styles from './order-details.module.css'
import done from '../../images/done.png'
import { orderDetailsPropTypes } from '../../utils/types';

const OrderDetails = ({ orderDetails }) => {
  const { order } = orderDetails

  return (
    <div className={styles.order}>
      <h4 className={styles.number}>{order.number}</h4>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.image} src={done} alt="done" />
      <p className={styles.caption}>Ваш заказ начали готовить</p>
      <p className={styles.subcaption}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

OrderDetails.propTypes = {
  orderDetails: orderDetailsPropTypes.isRequired,
}
export default OrderDetails;
