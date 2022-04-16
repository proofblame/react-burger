
import { useLocation } from 'react-router-dom'
import { TOrder } from '../../services/types/feed'
import FeedItem from './feed-item/feed-item'
import style from './feed-list.module.css'

const FeedList = ({ status, orders }: { status?: boolean, orders: Array<TOrder> }) => {

  const location = useLocation()

  const list = orders.map((order) => (
    <FeedItem order={order} key={order.number} status={status} />
  ))

  return (
    orders &&
    <section className={style.section}>
      <ul className={style.list}>
        {
          (location.pathname.indexOf('/feed') === 0) ? list : list.reverse()

        }
      </ul>
    </section>
  )
}

export default FeedList