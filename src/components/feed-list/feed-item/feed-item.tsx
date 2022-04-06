import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { FC } from 'react'
import style from './feed-item.module.css'

const FeedItem: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <span className={style.number}>#034535</span>
        <span className={style.date}>Сегодня, 16:20 i-GMT+3</span>
      </div>
      <div>
        <h3 className={style.title}>Death Star Starship Main бургер</h3>
        <p className={style.status}>Готовится</p>
      </div>
      <div className={style.wrapper}>
        <ul className={style.list}>
          <li>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
          </li>
          <li>
            <img src="https://code.s3.yandex.net/react/code/sauce-02.png" alt="" />
          </li>
          <li>
            <img src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
          </li>
          <li>
            <img src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
          </li>
          <li>
            <img src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
          </li>
          <li>
            <img src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
          </li>
        </ul>
        <p className={style.price}>
          <span>480</span>
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </section>
  )
}

export default FeedItem