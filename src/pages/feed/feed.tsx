import React, { FC } from 'react'
import FeedList from '../../components/feed-list/feed-list'
import FeedTable from '../../components/feed-table/feed-table'
import { useSelector } from '../../services/hooks'
import style from './feed.module.css'


const FeedPage: FC = () => {
  const { feed } = useSelector(store => store.feed)
  return (
    feed &&
    <section className={style.section}>
      <h2 className={style.title}>Лента заказов</h2>
      <div className={style.wrapper}>
        <FeedList status={true} orders={feed?.orders} />
        <FeedTable />
      </div>
    </section>
  )
}

export default FeedPage