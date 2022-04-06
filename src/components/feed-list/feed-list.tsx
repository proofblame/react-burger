import { FC } from 'react'
import FeedItem from './feed-item/feed-item'
import style from './feed-list.module.css'

const FeedList: FC = () => {
  return (
    <section className={style.section}>
      <ul className={style.list}>
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </ul>
    </section>
  )
}

export default FeedList