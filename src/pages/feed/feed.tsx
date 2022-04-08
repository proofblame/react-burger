import React, { FC, useEffect } from 'react'
import FeedList from '../../components/feed-list/feed-list'
import FeedTable from '../../components/feed-table/feed-table'
import { wsConnectionClose, wsConnectionStart } from '../../services/actions/feed'
import { useDispatch, useSelector } from '../../services/hooks'
import { wsConnectionClosed } from '../../services/reducers/feed'
import style from './feed.module.css'


const FeedPage: FC = () => {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders/all`))
      return () => {
        dispatch(wsConnectionClose())
      }
    }, [dispatch]
  )



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