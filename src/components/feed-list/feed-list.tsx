
import { TOrder } from '../../services/types/feed'
import FeedItem from './feed-item/feed-item'
import style from './feed-list.module.css'

const FeedList = ({ status, orders }: { status?: boolean, orders: Array<TOrder> }) => {

  return (
    orders &&
    <section className={style.section}>
      <ul className={style.list}>
        {
          orders.map((order) => (
            <FeedItem order={order} key={order.number} status={status} />
          ))
        }
      </ul>
    </section>
  )
}

export default FeedList