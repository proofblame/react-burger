import style from './profile.module.css'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import { logout } from '../../services/actions/auth'
import { useDispatch, useSelector } from '../../services/hooks';
import { FC } from 'react'
import UserProfile from '../../components/user-profile/user-profile';
import UserOrders from '../../components/user-orders/user-orders';
import OrderInfo from '../../components/order-info/order-info';
import FeedList from '../../components/feed-list/feed-list';

export const ProfilePage: FC = () => {
  const dispatch = useDispatch()
  const { path } = useRouteMatch();
  const { feed } = useSelector(store => store.feed)

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    feed &&
    <section className={style.profile}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <NavLink className={style.link} activeClassName={style.active} exact to="/profile">Профиль</NavLink>
          </li>
          <li>
            <NavLink className={style.link} activeClassName={style.active} to="/profile/orders">История заказов</NavLink>
          </li>
          <li>
            <button className={style.button} onClick={onLogout}>
              Выход
            </button>
          </li>
        </ul>
        <p className={style.caption}>
          В этом разделе вы можете
          изменить свои персональные данные
        </p>
      </nav>
      <Route exact path={path}>
        <UserProfile />
      </Route>
      <Route path={`${path}/orders`}>
        <FeedList orders={feed?.orders} />
      </Route>
    </section>
  )
}
