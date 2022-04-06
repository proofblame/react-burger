import React, { FC } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import FeedList from '../../components/feed-list/feed-list'
import FeedTable from '../../components/feed-table/feed-table'
import style from './feed.module.css'

const FeedPage: FC = () => {
  const { path } = useRouteMatch();

  return (
    <section className={style.section}>

      <h2 className={style.title}>Лента заказов</h2>
      <div className={style.wrapper}>
        <FeedList status={true} />
        <FeedTable />
      </div>
    </section>
  )
}

export default FeedPage