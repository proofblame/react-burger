import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import style from './feed-item.module.css'

const FeedItem = ({ status }: { status?: boolean }) => {
  const location = useLocation();
  const { path } = useRouteMatch();
  return (
    <li className={style.section}>
      <Link key={location.key} className={style.link} to={{ pathname: `${path}/:id`, state: { background: location } }}>
        <div className={style.wrapper}>
          <span className={style.number}>#034535</span>
          <span className={style.date}>Сегодня, 16:20 i-GMT+3</span>
        </div>
        <div>
          <h3 className={style.title}>Death Star Starship Main бургер</h3>
          {status === true && <p className={style.status}>Готовится</p>}
        </div>
        <div className={style.wrapper}>
          <ul className={style.list}>
            <li>
              <span className={style.counter}>+3</span>
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
      </Link>
    </li>
  )
}

export default FeedItem