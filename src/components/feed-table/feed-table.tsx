import { FC } from 'react'
import { useSelector } from '../../services/hooks'
import { OrderStatus } from '../../utils/types'
import style from './feed-table.module.css'

const FeedTable: FC = () => {
  const { feed } = useSelector(store => store.feed)
  return (
    feed &&
    <section className={style.section}>
      <div className={style.orderWrapper}>
        <div className={style.readyBlock}>
          <h3 className={style.title}>Готовы:</h3>
          <ul className={style.listReady}>
            {
              feed.orders
                .filter(order => order.status === OrderStatus.DONE)
                .slice(0, 10)
                .map((item) =>
                (
                  <li key={item.number}>{item.number}</li>
                ))
            }
          </ul>
        </div>
        <div>
          <h3 className={style.title}>В работе:</h3>
          <ul className={style.listOrder}>
            {
              feed.orders
                .filter(order => order.status !== OrderStatus.DONE)
                .map((order, index) => (
                  index <= 5 && <li key={order.number}>{order.number}</li>
                ))
            }
          </ul>
        </div>
      </div>
      <div className={style.wrapper}>
        <h3 className={style.title}>Выполнено за все время:</h3>
        <p className={style.price}>{feed.total}</p>
      </div>
      <div className={style.wrapper}>
        <h3 className={style.title}>Выполнено за сегодня:</h3>
        <p className={style.price}>{feed.totalToday}</p>
      </div>
    </section>
  )
}

export default FeedTable