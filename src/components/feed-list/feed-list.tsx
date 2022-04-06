import { FC } from 'react'
import FeedItem from './feed-item/feed-item'
import style from './feed-list.module.css'

const FeedList = ({ status }: { status?: boolean }) => {
  return (
    <section className={style.section}>
      <ul className={style.list}>
        <FeedItem status={status} />
        <FeedItem status={status} />
        <FeedItem status={status} />
        <FeedItem status={status} />
        <FeedItem status={status} />
        <FeedItem status={status} />
        <FeedItem status={status} />
        <FeedItem status={status} />
      </ul>
    </section>
  )
}

export default FeedList