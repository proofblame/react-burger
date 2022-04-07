
import { useSelector } from '../../services/hooks'
import FeedItem from './feed-item/feed-item'
import style from './feed-list.module.css'

const FeedList = ({ status }: { status?: boolean }) => {
  const { feed } = useSelector(store => store.feed)
  return (
    feed &&
    <section className={style.section}>
      <ul className={style.list}>
        {
          feed?.orders.map((order) => (
            <FeedItem order={order} key={order.number} status={status} />
          ))
        }
      </ul>
    </section>
  )
}

export default FeedList