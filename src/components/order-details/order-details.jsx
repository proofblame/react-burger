import styles from './order-details.module.css'
import done from '../../images/done.png'

const OrderDetails = () => {
  return (
    <div className={styles.order}>
      <h4 className={styles.number}>034536</h4>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.image} src={done} alt="done" />
      <p className={styles.caption}>Ваш заказ начали готовить</p>
      <p className={styles.subcaption}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails;
