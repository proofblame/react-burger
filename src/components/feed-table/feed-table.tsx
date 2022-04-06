import { FC } from 'react'
import style from './feed-table.module.css'

const FeedTable: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.orderWrapper}>
        <div className={style.readyBlock}>
          <h3 className={style.title}>Готовы:</h3>
          <ul className={style.listReady}>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
          </ul>
        </div>
        <div>
          <h3 className={style.title}>В работе:</h3>
          <ul className={style.listOrder}>
            <li>034538</li>
            <li>034538</li>
            <li>034538</li>
          </ul>
        </div>
      </div>
      <div className={style.wrapper}>
        <h3 className={style.title}>Выполнено за все время:</h3>
        <p className={style.price}>28 752</p>
      </div>
      <div className={style.wrapper}>
        <h3 className={style.title}>Выполнено за сегодня:</h3>
        <p className={style.price}>138</p>
      </div>
    </section>
  )
}

export default FeedTable